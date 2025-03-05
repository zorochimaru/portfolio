import { useEffect, useState } from 'react';

export const usePreloadImages = (links: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all(
      links.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      }),
    ).then(() => setLoaded(true));
  }, [links]);

  return loaded;
};
