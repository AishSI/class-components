import { ChangeEvent, useState } from 'react';
import './searchBar.css';
import { InputSearch } from '@/features';

interface Props {
  onSearch: (findText: string) => void;
}

export const SearchBar = (props: Props): React.ReactNode => {
  const [findText, setFindText] = useState(localStorage.getItem('searchData') || '');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFindText(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('searchData', findText);
    props.onSearch(findText);
  };

  return (
    <div className="searchBar">
      <InputSearch searchData={findText} onChange={handleSearchChange} onSearch={handleSearch} />
    </div>
  );
};
