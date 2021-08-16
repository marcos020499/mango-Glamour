import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Mango Glamour - eCommerce React App';
    }
  }, [title]);
};

export default useDocumentTitle;
