import Chart from 'chart.js/auto';
import { vacancies as allData } from '../plug-data/vacancies-data';

const vacancyEl = document.getElementById('all-vacancy');
const rejectEl = document.getElementById('all-reject');
const offerEl = document.getElementById('all-offer');
const pendingEl = document.getElementById('all-pending');
const sentEl = document.getElementById('all-sent');
const canvaEl = document.getElementById('circle');
const totalTimeEl = document.getElementById('total-time');

const charColor = getComputedStyle(document.documentElement).getPropertyValue(
  '--french-sky-blue'
);

const getTotalTime = data => {
  const sortedData = data.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  const minTime = sortedData[0].date;
  const maxTime = sortedData[sortedData.length - 1].date;
  const totalTimeSec = new Date(maxTime) - new Date(minTime);
  const totalTimeDay = totalTimeSec / (1000 * 60 * 60 * 24);

  return totalTimeDay;
};

vacancyEl.textContent = allData.length;
pendingEl.textContent = allData.filter(el => el.status === 'pending').length;
rejectEl.textContent = allData.filter(el => el.status === 'reject').length;
offerEl.textContent = allData.filter(el => el.status === 'offer').length;
sentEl.textContent = allData.filter(el => el.status === 'sent').length;
totalTimeEl.textContent = getTotalTime(allData);

const charStat = async function (data) {
  const existingChart = Chart.getChart('circle');
  if (existingChart) {
    existingChart.destroy();
  }

  new Chart(canvaEl, {
    type: 'pie',
    data: {
      labels: ['pending', 'reject', 'offer', 'sent'],

      datasets: [
        {
          backgroundColor: ['#CCA8CF', '#F5AFA9', '#AECDCD', charColor],
          data: [
            data.filter(el => el.status === 'pending').length,
            data.filter(el => el.status === 'reject').length,
            data.filter(el => el.status === 'offer').length,
            data.filter(el => el.status === 'sent').length,
          ],
        },
      ],
    },
  });
};

charStat(allData);
