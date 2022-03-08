import React, { useState, useEffect } from "react";
import Search from "./Search";
import Table from "./Table";

//custom Hook
const useLocalStringDt = (key, init) => {
    const [value, setValue] = useState(localStorage.getItem(key) || init);
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);
    return [value, setValue]
}

//Main function
const TableData = () => {
    //Defines
    const dfData = { todoName: '', time: '', level: 'High', status: false };
    const [data, setData] = useState(dfData);
    const [mega, setMega] = useState([]);
    const [addShow, setAddShow] = useState(false);
    const [search, setSearch] = useLocalStringDt('search', 'Passer')
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
    // const InputForm = (props) => {
    //     const { key, children, type, plH } = props
    //     return <div><label htmlFor={key}>{children}: </label>
    //         <input type={type} value={data.key} onChange={e => { console.log(e.target.value); setData({ ...data, key: e.target.value }) }} placeholder={plH} />
    //     </div>
    // }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id) {
            mega[mega.indexOf(curDt(data.id))] = data;
            setData(dfData);
            setAddShow(false);
        } else if (data.todoName && data.time && data.level) {
            const newData = { ...data, id: new Date().getTime().toString() };
            setMega([...mega, newData]);
            setData(dfData);
            setAddShow(false);
        } else alert('Missing some information')
        console.log(data);
    };
    const handleSearch = () => { setIsSearch(true); setIsBtn(true); setIsData(false) }
    const searchVl = () => mega.filter(ele => ele.todoName.toLowerCase().includes(search))
    const handleBtn = () => { setIsSearch(false); setIsBtn(false); setIsData(true) };
    const handleClear = (e) => setMega(mega.filter(ele => ele.id !== e.target.parentNode.parentNode.id))
    //Effect
    useEffect(() => {
        console.log(mega);
    }, [mega]);
    //Main
    return <div className='container'>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <form className='createContainer ' onSubmit={handleSubmit}>
            {addShow && <div className='create'>
                {/* <InputForm key={data.todoName} type='text' plH="What you need to do" >Todo Name</InputForm>*/}
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
            {!addShow && <button className='btn' type='button' onClick={() => { setAddShow(true); setData(dfData); setIsSearch(false); setIsData(true) }}>Add Something Enjoyable</button>}
        </form>
        {isData && <Table arr={mega}
            handleEdit={handleEdit} handleStatus={handleStatus} handleClear={handleClear} />}
        {isSearch && <Table arr={searchVl()}
            isBtn={isBtn} handleBtn={handleBtn}
            handleEdit={handleEdit} handleStatus={handleStatus} handleClear={handleClear} />}
    </div >
}
export default TableData;

