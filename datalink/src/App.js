import './App.css';
import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users';

function App() {

  const [users, setUsers] = useState([]);
  const getData = async () => {
    const get = await fetch(url);
    const data = await get.json();
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <ShowHide />
      <div className='container'>
        {users.map(({ id, login, avatar_url, html_url }) => {
          return <div className='ele' key={id}>
            <img src={avatar_url} alt={login} />
            <div className='content'>
              <label>No. {id}</label>
              <h3>{login}</h3>
              <a href={html_url} span>Profile</a>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}


const ShowHide = () => {

  const [showHide, setShowHide] = useState(true);

  return <div className='showhide'>
    <button className='btn' onClick={() => { setShowHide(!showHide) }}>Show/Hide size</button>
    {showHide && <Item />}
  </div >
}

const Item = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const checkSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    };
  }, []);

  return <div>
    <h3>Window: {size[0]} x {size[1]}px</h3>
  </div>
}
export default App;
