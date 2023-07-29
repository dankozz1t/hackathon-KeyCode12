import { Datepicker } from 'vanillajs-datepicker';

const elem = document.getElementById('foo');
export const datepicker = new Datepicker(elem, {
  minDate: '01-01-2000',
  maxDate: '01-01-2100',
  todayHighlight: true,
});
