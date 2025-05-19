import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Quantive Research Insights`;
    
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useDocumentTitle;