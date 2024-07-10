import { Gallery } from '@/app/layout/gallery';
import { SearchBar } from '@/app/layout/search-bar';
import { Component, ComponentProps } from 'react';

interface State {
  findText: string;
}

export class Main extends Component<ComponentProps<'div'>, State> {
  constructor(props: ComponentProps<'div'>) {
    super(props);
    this.state = {
      findText: localStorage.getItem('searchData') || '',
    };
  }

  handleFind = (findText: string) => {
    this.setState({ findText });
  };

  render() {
    return (
      <>
        <SearchBar onSearch={this.handleFind} />
        <Gallery findText={this.state.findText} />
      </>
    );
  }
}
