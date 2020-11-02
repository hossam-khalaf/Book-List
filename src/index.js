import React from 'react';
import ReactDom from 'react-dom';

// statless functional component
// always return JSX
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Hossam Hassan</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello world!');
// };

ReactDom.render(<Greeting />, document.getElementById('root'));
