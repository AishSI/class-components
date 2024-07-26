import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
  const keyLocalStorage = 'searchDataReactTaskRS';

  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(keyLocalStorage) || '';
    return saved === '' ? '' : JSON.parse(saved);
  });

  useEffect(() => {
    const newValue = JSON.stringify(value);
    localStorage.setItem(keyLocalStorage, newValue);
  }, [value]);

  return [value, setValue];
};
