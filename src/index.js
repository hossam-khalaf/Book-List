import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css';

// setup variables
// A Promised Land
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
  title: 'Greenlights',
  author: 'Matthew McConaughey',
};
const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
  title: 'A Promised Land',
  author: 'Barack Obama',
};

// statless functional component
// always return JSX
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
