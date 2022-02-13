import './App.css';
import { data } from './components/books'
import Book from './components/Book';

function App() {
  return (
    <section className='bookshelf'>
      {data.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  );
}




export default App;
