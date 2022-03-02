const Book = ({ img, tittle, review }) => {

  const handleClick = (props) => {
    alert(' This is ' + props.target.parentNode.parentNode.children[1].innerText)
  }
  return (
    <article className='book'>
      <img src={img} alt={tittle} />
      <h3>{tittle}</h3>
      <h4>{review}</h4>
      <div>
        <button stye='button' onClick={handleClick}>Button</button>
      </div>
    </article>
  );
};

export default Book;
