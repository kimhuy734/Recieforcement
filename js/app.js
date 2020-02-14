const DATE_HTML  = document.querySelector('#date'); // TODO ; 
const LIST_HTML  = document.querySelector('#input');// TODO;
const INPUT_HTML = document.querySelector('#list'); // TODO;

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
// TODO
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};


const TODAY = new Date(); // TODO;
console.log(TODAY);
// TODO: to displa the date in HTML

DATE_HTML.innerHTML = TODAY.toLocaleString('en-Us', options);;

