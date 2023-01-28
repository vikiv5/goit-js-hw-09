import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const submitForm = document.querySelector(".form");
//const delay = document.querySelector("name[delay]");
//const step = document.querySelector ("name[step]");
//const amount = document.querySelector("name[amount]");

submitForm.addEventListener("submit", onSubmit);

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

function onSubmit(e){
  e.preventDefault();
  const {amount, delay,step} = e.target.elements;
  let delayValue= +delay.value;
  //let amountValue = +amount.value;
  //let stepValue = +step.value;

  for (let position = 1; position <= amount.value; position +=1) {
createPromise(position,delay) 
  .then(({position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delayValue += +step.value;
}}