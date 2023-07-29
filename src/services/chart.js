import Chart from 'chart.js/auto';
import { vacanciesAPI } from './vacanciesAPI';
// Chart.defaults.font.size = 24;
const date1 = new Date('2023-07-29');
const date2 = new Date('2023-07-2');
const date3 = new Date('2023-07-29');
const currentYear = 2023;

const getData = async () => {
  try {
    //   const data = await vacanciesAPI.getVacancies();
    //   console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// const allData = getData();
const allData = [
  {
    vacancyId: 1,
    vacancyLink: 'https/address1',
    companyName: 'superCompany1',
    position: 'front1',
    date: date1,
    statusId: 1,
    template: 'lorem',
    note: 'super',
  },
  {
    vacancyId: 2,
    vacancyLink: 'https/address2',
    companyName: 'superCompany2',
    position: 'front2',
    date: date2,
    statusId: 2,
    template: 'lorem',
    note: 'super',
  },
  {
    vacancyId: 3,
    vacancyLink: 'https/address3',
    companyName: 'superCompany3',
    position: 'front3',
    date: date3,
    statusId: 3,
    template: 'lorem',
    note: 'super',
  },
];

const filteredYearVacancy = (data, year) => {
  return data.filter(el => el.date.getFullYear() === year);
};

const filteredMonthVacancy = (data, month) => {
  return data.filter(el => el.date.getMonth() === month);
};

const filteredDayVacancy = (data, day) => {
  return data.filter(el => {
    return Date.parse(el.date) === Date.parse(day);
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
  const date = new Date(data);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const btnDayEl = document.getElementById('button--day');
const btnMonthEl = document.getElementById('button--month');
const btnYearEl = document.getElementById('button--year');
const canvasEl = document.getElementById('chart');

btnDayEl.addEventListener('click', () => buttonClick('day'));
btnMonthEl.addEventListener('click', () => buttonClick('month'));
btnYearEl.addEventListener('click', () => buttonClick('year'));

const buttonClick = period => {
  switch (period) {
    case 'day':
      chartDay(filteredDayVacancy(allData, '2023-07-29'));
      break;

    case 'month':
      chartMonth(filteredMonthVacancy(allData, 6));
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
      borderColor: 'red',
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
  console.log('chartDay', data);
};

const chartMonth = async function (data) {
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
      borderColor: 'red',
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

// const chart = async function (data) {
//

//   new Chart(document.getElementById('chart'), {
//     type: 'bar',
//     options: {
//       responsive: true,
//       borderWidth: 2,
//       borderRadius: 20,
//       borderColor: 'red',
//     },
//     data: {
//       labels: year.map(row => row.date.getMonth()),
//       datasets: [
//         {
//           label: 'Number of vacancies per year',
//           data: year.map(row => row.length),
//           backgroundColor: '#ff6384',
//         },
//       ],
//     },
//   });
// };

// const allSuccess = async function () {
//   const dataYear = [
//     { status: 'Success', count: 2 },
//     { status: 'Dismiss', count: 10 },
//     { status: 'Pending', count: 30 },
//   ];

//   //   const data = vacanciesAPI.getVacancies

//   new Chart(document.getElementById('allSuccess'), {
//     type: 'doughnut',
//     data: {
//       labels: dataYear.map(row => row.status),
//       datasets: [
//         {
//           label: 'Vacancies by year 2022',
//           data: dataYear.map(row => row.count),
//           borderColor: '#42A2EB',
//           backgroundColor: ['#ff6384', '#42A2EB', '#a2A2EB'],
//           hoverOffset: 4,
//         },
//       ],

//       options: {
//         layout: {
//           padding: 20,
//         },
//       },
//     },
//   });
// };

// const polarArea = async function () {
//   const dataYear = [
//     { status: 'Success', count: 12 },
//     { status: 'Dismiss', count: 10 },
//     { status: 'Pending', count: 30 },
//   ];

//   //   const data = await vacanciesAPI.getVacancies

//   new Chart(document.getElementById('polarArea'), {
//     type: 'polarArea',
//     data: {
//       labels: dataYear.map(row => row.status),
//       datasets: [
//         {
//           label: 'Vacancies by year 2022',
//           data: dataYear.map(row => row.count),
//           borderColor: '#42A2EB',
//           backgroundColor: ['#ff6384', '#42A2EB', '#a2A2EB'],
//           hoverOffset: 4,
//         },
//       ],

//       options: {
//         animations: {
//           tension: {
//             duration: 1000,
//             easing: 'linear',
//             from: 1,
//             to: 0,
//             loop: true,
//           },
//         },
//         layout: {
//           padding: 20,
//         },
//         clip: { left: 5, top: false, right: -2, bottom: 0 },
//       },
//     },
//   });
// };

// chart();
// allSuccess();
// polarArea();
