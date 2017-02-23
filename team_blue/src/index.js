import React from 'react';
import ReactDOM from 'react-dom';

console.log('React is up and running!');
class Hello extends React.Component {
  render() {
    return <div>hello</div>;
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);