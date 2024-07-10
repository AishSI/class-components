import { ChangeEvent, Component } from 'react';
import './searchBar.css';
import { InputSearch } from '@/features';

interface Props {
  onSearch: (findText: string) => void;
}

interface State {
  errorCaused: boolean;
  findText: string;
}

export class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      errorCaused: false,
      findText: localStorage.getItem('searchData') || '',
    };
  }

  componentDidMount() {
    const saveData = localStorage.getItem('searchData');
    if (saveData) {
      this.setState({ findText: saveData });
    }
  }

  handleError = () => {
    this.setState({ errorCaused: true });
  };

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ findText: event.target.value });
  };

  handleSearch = () => {
    localStorage.setItem('searchData', this.state.findText);
    this.props.onSearch(this.state.findText);
  };

  render() {
    if (this.state.errorCaused) {
      throw new Error('You caused an application error');
    }
    return (
      <div className="searchBar">
        <InputSearch searchData={this.state.findText} onChange={this.handleSearchChange} onSearch={this.handleSearch} />

        <button className="buttonError" onClick={this.handleError}>
          Do not press!
        </button>
      </div>
    );
  }
}
