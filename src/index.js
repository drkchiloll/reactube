import React from 'react';
import ReactDOM from 'react-dom';

// Create a New Component. This Component should produce some HTML
class App extends React.Component {
  render() {
    return <div>Hi!</div>
  }
};

// Take this Component's generated HTML and put it on the Page (DOM)
ReactDOM.render(<App/>, document.querySelector(`.container`));
