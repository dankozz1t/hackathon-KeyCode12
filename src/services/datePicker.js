import { Datepicker } from 'vanillajs-datepicker';

const elem = document.getElementById('foo');
const monthElem = document?.getElementById('month');
const yearElem = document?.getElementById('year');

export const datepicker = new Datepicker(elem, {
  minDate: '01-01-2000',
  maxDate: '01-01-2100',
  todayHighlight: true,
});

export const datepickerMonth = new Datepicker(monthElem, {
  minDate: '01-01-2000',
  maxDate: '01-01-2100',
  todayHighlight: true,
  pickLevel: 1,
});

export const datepickerYear = new Datepicker(yearElem, {
  minDate: '01-01-2000',
  maxDate: '01-01-2100',
  todayHighlight: true,
  pickLevel: 2,
});
