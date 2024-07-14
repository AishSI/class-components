import { Gallery } from '@/app/layout/gallery';
import { SearchBar } from '@/app/layout/search-bar';
import { useState } from 'react';

export const Main = (): React.ReactNode => {
  const [findText, setFindText] = useState(localStorage.getItem('searchData') || '');

  const handleFind = (findText: string) => {
    setFindText(findText);
  };

  return (
    <>
      <SearchBar onSearch={handleFind} />
      <Gallery findText={findText} />
    </>
  );
};
