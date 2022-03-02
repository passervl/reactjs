import './App.css';
import { books } from './components/books'
import Book from './components/Book';

function App() {
  return (
    <section className='bookshelf'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  );
}

export default App;
