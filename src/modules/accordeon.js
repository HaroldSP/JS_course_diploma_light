/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

const accordeon = (e) => {
//   const elements = document.querySelectorAll('.accordeon > .element');

  //   console.log(elements)

  const element = e.target.parentElement;
  const elements = element.parentElement.children;

  for (let otherElement of elements) {
    if (otherElement !== element) {
      otherElement.classList.remove('active');
    }
  }

  element.classList.add('active');
}

// const elements = document.querySelectorAll('.element');

// for (let element of elements) {
//   const title = element.querySelector('.title');
//   title.addEventListener('click', handleAccordionClick);
// }

export default accordeon;
