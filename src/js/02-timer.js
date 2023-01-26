
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";


const startBtn = document.querySelector ("button[data-start]") ;
const inputEl= document.querySelector ("#datetime-picker");
const spanDays = document.querySelector ("span[data-days]");
const spanHours = document.querySelector ("span[data-hours]");
const spanMinutes = document.querySelector ("span[data-minutes]");
const spanSeconds = document.querySelector ("span[data-seconds]");

let timerId=null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] < options.defaultDate){
           Notiflix.Notify.failure ("please choose a date in the future ")
        } else {
            options.defaultDate=selectedDates[0];
            startBtn.removeAttribute("disabled")
        }
      console.log(selectedDates[0]);
    },
  };
  flatpickr (inputEl,options);

  startBtn.addEventListener("click", onStartBtnClick );

  //timer start 

  function onStartBtnClick(){
    
    const selectedDate= inputEl.value;
    const ms= new Date (selectedDate)-Date.now ();
    const convertedDate= convertMs(ms)

    timerId=setInterval(onStartBtnClick, 1000)

    spanDays.textContent=addLeadingZero(convertedDate.days);
    spanHours.textContent=addLeadingZero(convertedDate.hours);
    spanMinutes.textContent=addLeadingZero(convertedDate.minutes);
    spanSeconds.textContent=addLeadingZero(convertedDate.seconds)
  }

  function addLeadingZero(value) {
    if (value < 10) {
        return value.toString().padStart(2,"0");
    }
    else {
        return value.toString()
    }
  }
  

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}