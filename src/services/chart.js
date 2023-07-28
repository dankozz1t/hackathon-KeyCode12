import Chart from 'chart.js/auto';
// import { vacanciesAPI } from './vacanciesAPI';
Chart.defaults.font.size = 24;

const chart = async function () {
  const data = [
    { month: 'June', count: 2, uncount: 5 },
    { month: 'July', count: 20, uncount: 5 },
    { month: 'August', count: 15, uncount: 5 },
    { month: 'June', count: 25, uncount: 23 },
    { month: 'September', count: 22, uncount: 25 },
    { month: 'October', count: 30, uncount: 4 },
  ];

  //   const data = vacanciesAPI.getVacancies

  new Chart(document.getElementById('chart'), {
    type: 'bar',
    options: {
      responsive: true,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: 'red',
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
    data: {
      labels: data.map(row => row.month),
      datasets: [
        {
          label: 'Vacancies count',
          data: data.map(row => row.count),
          backgroundColor: '#ff6384',
        },
        {
          label: 'Vacancies uncount',
          data: data.map(row => row.uncount),
          backgroundColor: '#42A2EB',
        },
      ],
    },
  });
};

const allSuccess = async function () {
  const dataYear = [
    { status: 'Success', count: 2 },
    { status: 'Dismiss', count: 10 },
    { status: 'Pending', count: 30 },
  ];

  //   const data = vacanciesAPI.getVacancies

  new Chart(document.getElementById('allSuccess'), {
    type: 'doughnut',
    data: {
      labels: dataYear.map(row => row.status),
      datasets: [
        {
          label: 'Vacancies by year 2022',
          data: dataYear.map(row => row.count),
          borderColor: '#42A2EB',
          backgroundColor: ['#ff6384', '#42A2EB', '#a2A2EB'],
          hoverOffset: 4,
        },
      ],

      options: {
        layout: {
          padding: 20,
        },
      },
    },
  });
};

const polarArea = async function () {
  const dataYear = [
    { status: 'Success', count: 12 },
    { status: 'Dismiss', count: 10 },
    { status: 'Pending', count: 30 },
  ];

  //   const data = await vacanciesAPI.getVacancies

  new Chart(document.getElementById('polarArea'), {
    type: 'polarArea',
    data: {
      labels: dataYear.map(row => row.status),
      datasets: [
        {
          label: 'Vacancies by year 2022',
          data: dataYear.map(row => row.count),
          borderColor: '#42A2EB',
          backgroundColor: ['#ff6384', '#42A2EB', '#a2A2EB'],
          hoverOffset: 4,
        },
      ],

      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        layout: {
          padding: 20,
        },
        clip: { left: 5, top: false, right: -2, bottom: 0 },
      },
    },
  });
};

chart();
allSuccess();
polarArea();
