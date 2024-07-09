import { Gallery } from '@/app/layout/gallery';
import { SearchBar } from '@/app/layout/search-bar';
import { Component } from 'react';

export class Main extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Gallery findText="" />
      </>
    );
  }
}
