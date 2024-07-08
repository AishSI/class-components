import { Component, ComponentProps } from 'react';
import './searchBar.css';

interface State {
  errorCaused: boolean;
}

export class SearchBar extends Component<ComponentProps<'div'>, State> {
  constructor(props: ComponentProps<'div'>) {
    super(props);

    this.state = {
      errorCaused: false,
    };
  }

  handleError = () => {
    this.setState({ errorCaused: true });
  };

  render() {
    if (this.state.errorCaused) {
      throw new Error('You caused an application error');
    }
    return (
      <div className="searchBar">
        <button className="buttonError" onClick={this.handleError}>
          Do not press!
        </button>
      </div>
    );
  }
}
