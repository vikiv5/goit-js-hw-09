import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const createPromiseBtn = document.querySelector ("button");
const delay = document.querySelector("name[delay]");
const step = document.querySelector ("name[step]");
const amount = document.querySelector("name[amount]");

createPromiseBtn.addEventListener ("click", onCreatePromiseBtnClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
  const shouldResolve = Math.random() > 0.3;

  setTimeout(()=> {
  if (shouldResolve) {
    resolve ({position, delay})
    // Fulfill
  } else {
    reject ({position, delay});
  }
    // Reject
  }, delay);
})
}

function onCreatePromiseBtnClick(e){
  e.preventDefault();

  for (let position = 1; position <= amount.value; position +=1) {
createPromise(position,delay) 
  .then(({position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay.value += step.value;
}}