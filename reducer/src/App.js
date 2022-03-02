import './App.css';
import { useReducer, useRef } from 'react';


const dfState = {
  data: { name: '', time: '', level: '', status: false, id: '' },
  mega: [],
  isCreate: true,
}
const reducer = (state, action) => {
  if (action.type === 'SUBMIT') {
    console.log((state));
    return {
      data: { ...state.data, id: new Date().getTime().toString() },
      isCreate: true,
      mega: [...state.mega, this.data]
    }
  }
  console.log(state);
}


const Create = (props) => {
  const createRef = useRef(props.state.data)
  const { handleChange, handleSubmit } = props;

  return <div className="container" ref={createRef}>
    <form onSubmit={handleSubmit} className="createForm">
      <div className="createName"><label htmlFor="name">Todo Name: </label>
        <input type="text" name='name' onChange={handleChange} value={createRef.current.name}
          placeholder="What's you need to do?" /></div>
      <div className="createTime"><label htmlFor="time">Todo Time:</label>
        <input type="time" name='time' onChange={handleChange} value={createRef.current.time} /></div>
      <div className="createLevel"><label htmlFor="level">Level: </label>
        <select name="level" onChange={handleChange} value={createRef.current.level}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select></div>
      <button type='submit' className='btn'>Add event</button>
    </form >
  </div >
}




function App() {

  const [state, dispatch] = useReducer(reducer, dfState);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    return dispatch({ type: 'SUBMIT' })
  }
  const handleChange = async (e) => {
    const { name, value } = e.target

  }

  return (
    <div className="App">
      {state.isCreate && <Create
        state={state} handleChange={handleChange} handleSubmit={handleSubmit}
      />}
      <div>Hello</div>
    </div>
  );
}

export default App;
