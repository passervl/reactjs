import React, { useState } from "react";

//Small functions
function Table(props) {
    const { arr, handleEdit, handleStatus, isBtn, setIsBtn, setIsData, setIsSearch } = props;
    return <div className='table'>
        <div className='tableHead'>
            <h3>No.</h3>
            <h3 className='tableName'>Todo Name</h3>
            <h3>Time</h3>
            <h3>Level</h3>
            <h3>Status</h3>
        </div>
        {arr.map((ele, index) => {
            let { id, todoName, time, level, status } = ele;
            return <div className='tableBody' key={id} id={id} onClick={handleEdit}>
                <div>{index + 1}</div>
                <div className='tableName'>{todoName}</div>
                <div>{time}</div>
                <div>{level}</div>
                <div>{id && <button className="btn" value={status}
                    onClick={handleStatus}>{!status ? 'Done' : 'Recheck'}</button>}
                </div>
            </div>;
        })}
        {isBtn && <div className='tableBody clBtn'><button className="btn bt " onClick={() => { setIsSearch(false); setIsBtn(false); setIsData(true) }}><strong>Close</strong></button></div>}
    </div>;
}

//Main function
const TableData = () => {
    //Defines
    const dfData = { todoName: '', time: '', level: 'High', status: false };
    const [data, setData] = useState(dfData);
    const [mega, setMega] = useState([]);
    const [addShow, setAddShow] = useState(false);
    const [search, setSearch] = useState('');
    const [isData, setIsData] = useState(true);
    const [isSearch, setIsSearch] = useState(false);
    const [isBtn, setIsBtn] = useState(false);
    //curFunctions
    const curDt = (id) => {
        let cur = {};
        mega.map((el) => { if (el.id === id) { cur = el } return cur });
        return cur;
    };
    const handleStatus = (e) => {
        let id = e.target.parentNode.parentNode.id;
        curDt(id).status = !curDt(id).status;
        curDt(id).status ? alert('Congratulation You finished it') : alert(`C'mol
You can do it`)
        console.log(curDt(id));
    }
    const handleEdit = (e) => {
        let id = e.target.parentNode.id;
        console.log(id);
        setData(curDt(id));
        setAddShow(true)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id) {
            mega[mega.indexOf(curDt(data.id))] = data;
        } else if (data.todoName && data.time && data.level) {
            const newData = { ...data, id: new Date().getTime().toString() };
            setMega([...mega, newData]);
        } else alert('Missing some information')
        console.log(data, mega);
        setData(dfData);
        setAddShow(false);
    };
    const handleSearch = () => { setIsSearch(true); setIsBtn(true); setIsData(false) }
    const searchVl = () => { return mega.filter(ele => ele.todoName.toLowerCase().includes(search.toLowerCase())) }

    //Main
    return <div className='container'>
        <div><input type="text" name="search" placeholder="What's you're looking for?" value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={e => { if (e.key === 'Enter') { handleSearch() } }} />
            <button type="search" onClick={handleSearch}>Search</button>
        </div>
        <form className='createContainer ' onSubmit={handleSubmit}>
            {addShow && <div className='create'>
                <div className='todoName'>
                    <label htmlFor='todoName'>Todo Name: </label>
                    <input placeholder="What's you wanna to do" name="todoName"
                        onChange={handleChange} value={data.todoName} />
                </div>
                <div className='time'>
                    <label htmlFor='time'>Time:  </label>
                    <input placeholder="What's time" name="time" type='time'
                        onChange={handleChange} value={data.time}
                    />
                </div>
                <div className='level'>
                    <label htmlFor='level'>Level:  </label>
                    <select placeholder="What's level" name="level"
                        onChange={handleChange} value={data.level}>
                        <option value='High' >High</option>
                        <option value='Medium'>Medium</option>
                        <option value='Easy'>Easy</option>
                    </select>
                </div>
                <div className='status hide'>
                    <label htmlFor='status'>Status:  </label>
                    <select name="status" value={data.status} onChange={handleChange} >
                        <option value="done" >Done</option>
                        <option value="notYet" >Not Yet</option>
                    </select>
                </div>
                <div className='button'>
                    <button type='submit' className='btn' onClick={handleSubmit}>Take part</button>
                    <button type='reset' className='btn' onClick={() => setData(dfData)}>Reset</button>
                </div>
            </div>}
            {!addShow && <button className='btn' type='button' onClick={() => { setAddShow(true); setData(dfData) }}>Add Something Enjoyable</button>}
        </form>
        {isData && <Table arr={mega}
            handleEdit={handleEdit} handleStatus={handleStatus} />}
        {isSearch && <Table arr={searchVl()}
            isBtn={isBtn} setIsBtn={setIsBtn} setIsData={setIsData} setIsSearch={setIsSearch}
            handleEdit={handleEdit} handleStatus={handleStatus} />}
    </div >
}
export default TableData;