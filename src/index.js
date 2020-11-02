import React from 'react';
import ReactDom from 'react-dom';

// statless functional component
// always return JSX
function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Auther />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
);

const Title = () => <h3>Greenlights</h3>;

const Auther = () => <h4>Matthew McConaughey</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
