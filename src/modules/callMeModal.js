/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

const callMeModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCallMe = document.querySelector('.modal-callback');
  const closeBtn = document.querySelector('.modal-close');

  document.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('callback-btn')) {
      console.log(e.target);
      modalOverlay.style.display = 'flex';
      modalCallMe.style.display = 'flex';
    } else if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
      modalOverlay.style.display = 'none';
      modalCallMe.style.display = 'none';
    }
  });
}

export default callMeModal;
