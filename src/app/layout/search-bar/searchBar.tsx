import { ChangeEvent, useState } from 'react';
import './searchBar.css';
import { InputSearch } from '@/features';
import { useLocalStorage } from '@/features/restore-search/hooks';

interface SearchBarProps {
  onSearch: (findText: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps): React.ReactNode => {
  const [searchTextLS, setSearchTextLS] = useLocalStorage();
  const [searchText, setSearchText] = useState(searchTextLS);

  const [errorCaused, setErrorCaused] = useState(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    setSearchTextLS(searchText);
    onSearch(searchText);
  };

  const handleError = () => {
    setErrorCaused(true);
  };

  if (errorCaused) {
    throw new Error('You caused an application error');
  }

  return (
    <div className="searchBar">
      <InputSearch searchData={searchText} onChange={handleSearchChange} onSearch={handleSearch} />

      <button className="buttonError" onClick={handleError}>
        Do not press!
      </button>
    </div>
  );
};
