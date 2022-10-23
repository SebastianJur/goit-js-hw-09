import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
const button = document.querySelector('button');

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        console.log('co to robi?');
        console.log({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

function handleSubmit(event) {
  event.preventDefault();
  let amount = Number(form.elements.amount.value);
  let step = Number(form.elements.step.value);
  let delay = Number(form.elements.delay.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log('then');
        console.log({ position, delay });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌Rejected promise ${position} in ${delay}ms`);
      });

    delay = step + delay;
  }
}
