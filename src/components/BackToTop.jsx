import { useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <button onClick={scrollToTop} className="btn btn-neutral px-5 text-2xl fixed z-50 right-12 bottom-12" style={{ display: visible ? 'inline' : 'none' }}>
      <i className="bx bx-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
