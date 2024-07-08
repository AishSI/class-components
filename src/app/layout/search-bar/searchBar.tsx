import { ChangeEvent, Component, ComponentProps } from 'react';
import './searchBar.css';
import { InputSearch } from '@/features';

interface State {
  errorCaused: boolean;
  searchData: string;
}

export class SearchBar extends Component<ComponentProps<'div'>, State> {
  constructor(props: ComponentProps<'div'>) {
    super(props);

    this.state = {
      errorCaused: false,
      searchData: '',
    };
  }

  componentDidMount() {
    const saveData = localStorage.getItem('searchData');
    if (saveData) {
      this.setState({ searchData: saveData });
    }
  }

  handleError = () => {
    this.setState({ errorCaused: true });
  };

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchData: event.target.value });
  };

  handleSearch = () => {
    localStorage.setItem('searchData', this.state.searchData);
  };

  render() {
    if (this.state.errorCaused) {
      throw new Error('You caused an application error');
    }
    return (
      <div className="searchBar">
        <InputSearch
          searchData={this.state.searchData}
          onChange={this.handleSearchChange}
          onSearch={this.handleSearch}
        />

        <button className="buttonError" onClick={this.handleError}>
          Do not press!
        </button>
      </div>
    );
  }
}
