import React, { useState, useEffect } from 'react'
import Create from './Container/Create'
import Table from './Container/Table';

const Container = () => {

    const dfData = { tittle: '', content: '', }
    const dfMega = JSON.parse(localStorage.getItem('mega'));
    const [data, setData] = useState(dfData);
    const [mega, setMega] = useState(dfMega || []);
    const [isCreateOn, setIsCreateOn] = useState(true);
    const curDt = (eID) => mega.filter(ele => ele.id === eID)[0];
    const handleChange = e => { const { name, value } = e.target; setData({ ...data, [name]: value }); }
    const handleSubmit = e => {
        e.preventDefault();
        if (data.id) {
            mega[mega.indexOf(curDt(data.id))] = data;
            setData(dfData)
            setIsCreateOn(false);
        }
        else if (data.tittle && data.content) {
            let cur = { ...data, id: new Date().getTime().toString() };
            setData(dfData);
            setMega([...mega, cur]);
            setIsCreateOn(false);
        } else alert('Missing something')
    }
    const handleClear = (e) => setMega(mega.filter(ele => ele.id !== e.target.parentNode.parentNode.parentNode.id));
    const handleEdit = (e) => {
        setData(curDt(e.target.parentNode.parentNode.parentNode.id));
        setIsCreateOn(true);
    }
    useEffect(() => {
        localStorage.setItem('mega', JSON.stringify(mega));
        let curMega = JSON.parse(localStorage.getItem('mega'));
        console.log(curMega);
    }, [mega]);


    return (
        <>
            <hr />
            {!isCreateOn && <button className='btn' onClick={() => { setIsCreateOn(true) }}>Create memo</button>}
            <div className='container'>
                <div>
                    {isCreateOn && <Create data={data} handleChange={handleChange} handleSubmit={handleSubmit} />}
                </div>
                <Table mega={mega} handleClear={handleClear} handleEdit={handleEdit} />
            </div>
        </>
    )
}

export default Container