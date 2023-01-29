


import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const submitForm = document.querySelector(".form");


submitForm.addEventListener("submit", onSubmit);

function createPromise(position, delay) {
return new Promise((resolve, reject)=>{
const shouldResolve = Math.random()>0.3;

setTimeout(()=> {
 if (shouldResolve) {
 resolve ({position, delay})
    // Fulfill
 } else {
   reject ({position,delay});
  }
    // Reject
  }, delay);
})
}

function onSubmit(e){
  e.preventDefault();
  const {delay,step,amount} = e.target.elements;
  let delayValue= +delay.value;
  let amountValue = +amount.value;
  let stepValue = +step.value;

  for (let position = 1; position <= amountValue; position +=1) {
createPromise(position,delayValue) 
 .then(({position, delay }) => {
 Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
 .catch(({position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
 });
 delayValue += stepValue;
}
e.target.reset();
}