import { ChangeEvent } from 'react';
import './inputSearch.css';

interface Props {
  searchData: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const InputSearch = (props: Props) => {
  const { searchData, onChange, onSearch } = props;
  return (
    <div className="inputContainer">
      <input
        className="inputSearch"
        type="text"
        placeholder="enter the search data"
        value={searchData}
        onChange={onChange}
      />
      <button className="buttonSearch" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};
