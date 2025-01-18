import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `FurFuture Funding - ${title}`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}

export default useDocumentTitle;