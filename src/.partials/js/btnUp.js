import trottle from 'lodash.throttle';

const scrollBtn = document.querySelector('.btn-scroll')

const element = document.documentElement;
const scroll = () => {
  const scrollTotal = element.scrollHeight - element.clientHeight;
  if (element.scrollTop / scrollTotal > 0.1) {
    scrollBtn.classList.add('showBtn');
    scrollBtn.addEventListener('click', btnScroll);
  } else {
    scrollBtn.classList.remove('showBtn');
    scrollBtn.removeEventListener('click', btnScroll);
  }
};

document.addEventListener('scroll', trottle(scroll, 200));

export const btnScroll = () => {
  element.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};