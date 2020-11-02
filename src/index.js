import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css';

// statless functional component
// always return JSX
function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h3>Greenlights</h3>
      <h4>Matthew McConaughey</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
