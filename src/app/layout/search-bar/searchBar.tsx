import { ChangeEvent, useState } from 'react';
import './searchBar.css';
import { InputSearch } from '@/features';

interface Props {
  onSearch: (findText: string) => void;
}

export const SearchBar = (props: Props): React.ReactNode => {
  const [errorCaused, setErrorCaused] = useState(false);
  const [findText, setFindText] = useState(localStorage.getItem('searchData') || '');

  const handleError = () => {
    setErrorCaused(true);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFindText(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('searchData', findText);
    props.onSearch(findText);
  };

  if (errorCaused) {
    throw new Error('You caused an application error');
  }

  return (
    <div className="searchBar">
      <InputSearch searchData={findText} onChange={handleSearchChange} onSearch={handleSearch} />

      <button className="buttonError" onClick={handleError}>
        Do not press!
      </button>
    </div>
  );
};
