import Chart from 'chart.js/auto';
import { vacanciesAPI } from './vacanciesAPI';
import { datepicker } from './datePicker';
import { datepickerMonth } from './datePicker';
import { vacancies as allData } from '../plug-data/vacancies-data';

const charColor = getComputedStyle(document.documentElement).getPropertyValue(
  '--french-sky-blue'
);
const borderCharColor = getComputedStyle(
  document.documentElement
).getPropertyValue('--brandeis-blue');

console.log(charColor);

const currentYear = 2023;

const getData = async () => {
  try {
    //   const data = await vacanciesAPI.getVacancies();
    //   console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const filteredYearVacancy = (data, year) => {
  return data.filter(el => el.date.getFullYear() === year);
};

const filteredMonthVacancy = (data, month) => {
  return data.filter(el => {
    const d = new Date(el.date);
    return d.getMonth() + 1 === month;
  });
};

const filteredDayVacancy = (data, day) => {
  return data.filter(el => {
    console.log(new Date(el.date));
    const d = new Date(el.date);
    const dateWithoutTime1 = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate()
    );
    const dateWithoutTime2 = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate()
    );
    return dateWithoutTime1.getTime() === dateWithoutTime2.getTime();
  });
};

const parseMonth = month => {
  switch (month) {
    case 1:
      return 'January';

    case 1:
      return 'January';

    case 2:
      return 'February';

    case 3:
      return 'March';

    case 4:
      return 'April';

    case 5:
      return 'May';

    case 6:
      return 'June';

    case 7:
      return 'July';

    case 8:
      return 'August';

    case 9:
      return 'September';

    case 10:
      return 'October';

    case 11:
      return 'November';

    case 12:
      return 'December';

    default:
      break;
  }
};

const parseDay = data => {
  console.log(data);
  const date = new Date(data);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const btnDayEl = document.getElementById('foo');
const btnMonthEl = document.getElementById('month');
const btnYearEl = document.getElementById('button--year');
const canvasEl = document.getElementById('chart');

console.log(btnMonthEl);

btnDayEl.addEventListener('click', () => {
  const currentDate = datepicker.getDate();
  buttonClick('day', currentDate);
});

btnMonthEl?.addEventListener('click', () => {
  const currentDate = datepickerMonth.getDate();

  const date = currentDate.getMonth() + 1;
  buttonClick('month', date);
});

// btnYearEl.addEventListener('click', () => buttonClick('year'));

const buttonClick = (period, currentDate) => {
  switch (period) {
    case 'day':
      chartDay(filteredDayVacancy(allData, currentDate));
      break;

    case 'month':
      chartMonth(filteredMonthVacancy(allData, currentDate));
      break;

    case 'year':
      chartYear(filteredYearVacancy(allData, 2023));
      break;

    default:
      break;
  }
};

const chartYear = async function (data) {
  const chartData = {};
  data.forEach(item => {
    const month = item.date.getMonth() + 1;
    const parsedMonth = parseMonth(month);

    if (chartData[parsedMonth]) {
      chartData[parsedMonth] += 1;
    } else {
      chartData[parsedMonth] = 1;
    }
  });

  const existingChart = Chart.getChart('chart');
  if (existingChart) {
    existingChart.destroy();
  }

  new Chart(canvasEl, {
    type: 'bar',
    options: {
      responsive: true,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: borderCharColor,
    },
    data: {
      labels: Object.keys(chartData),
      datasets: [
        {
          label: 'Number of vacancies per year',
          data: Object.values(chartData),
          backgroundColor: '#ff6384',
        },
      ],
    },
  });
};

const chartDay = async function (data) {
  const chartData = {};
  data.forEach(item => {
    const day = Date.parse(item.date);
    const parsedDay = parseDay(day);

    if (chartData[parsedDay]) {
      chartData[parsedDay] += 1;
    } else {
      chartData[parsedDay] = 1;
    }
  });

  const existingChart = Chart.getChart('chart');
  if (existingChart) {
    existingChart.destroy();
  }

  new Chart(canvasEl, {
    type: 'bar',
    options: {
      responsive: true,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: borderCharColor,
    },
    data: {
      labels: Object.keys(chartData),
      datasets: [
        {
          label: 'Number of vacancies per year',
          data: Object.values(chartData),
          backgroundColor: charColor,
        },
      ],
    },
  });
};

const chartMonth = async function (data) {
  const chartData = {};
  data.forEach(item => {
    const day = Date.parse(item.date);
    const parsedDay = parseDay(day);
    console.log(parsedDay);
    if (chartData[parsedDay]) {
      chartData[parsedDay] += 1;
    } else {
      chartData[parsedDay] = 1;
    }
  });

  const existingChart = Chart.getChart('chart');
  if (existingChart) {
    existingChart.destroy();
  }

  new Chart(canvasEl, {
    type: 'bar',
    options: {
      responsive: true,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: borderCharColor,
    },
    data: {
      labels: Object.keys(chartData),
      datasets: [
        {
          label: 'Number of vacancies in current day',
          data: Object.values(chartData),
          backgroundColor: charColor,
        },
      ],
    },
  });
};

chartDay(allData);
