import { ChangeEvent, Component } from 'react';
import './inputSearch.css';

interface SearchProps {
  searchData: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export class InputSearch extends Component<SearchProps> {
  render() {
    return (
      <div className="inputContainer">
        <input
          className="inputSearch"
          type="text"
          placeholder="enter the search data"
          value={this.props.searchData}
          onChange={this.props.onChange}
        />
        <button className="buttonSearch" onClick={this.props.onSearch}>
          Search
        </button>
      </div>
    );
  }
}
