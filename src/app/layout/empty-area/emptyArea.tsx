import { Component } from 'react';
import './emptyArea.css';

export class EmptyArea extends Component {
  handleReloadPage = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="emptyArea">
        <button className="buttonReload" onClick={this.handleReloadPage}>
          reload page
        </button>
        <p>Oh no! You have pressed this button after all!</p>
      </div>
    );
  }
}
