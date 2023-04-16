import { type ScrollToParams } from './scrollTo.types';

const scrollTo = ({ elementId, offsetTop = 0 }: ScrollToParams): void => {
  const target = document.getElementById(elementId);
  if (target) {
    const top = target.getBoundingClientRect().top + window.pageYOffset - offsetTop;
    window.scrollTo({ behavior: 'smooth', top });
  }
};

export default scrollTo;
