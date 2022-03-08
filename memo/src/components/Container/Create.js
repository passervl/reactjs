import React from 'react';

const Create = (props) => {
    const { handleChange, handleSubmit, data } = props;
    return (
        <form className='create-form' onSubmit={handleSubmit}>
            <InputForm name='tittle' data={data} txt="What's you need to memo?" handleChange={handleChange} >Tittle: </InputForm>
            <TextForm name='content' data={data} txt="Let's me know" handleChange={handleChange} handleSubmit={handleSubmit} />
            <button className='btn' type="submit" onClick={handleSubmit}>Submit</button>
        </form >
    );
}

const InputForm = ({ name, txt, handleChange, children, data }) => {
    return (
        <div className='inputForm'>
            <label style={{ 'font-size': 14 }} htmlFor={name}><strong>{children} </strong></label>
            <input name={name} type="text" placeholder={txt} onChange={handleChange} value={data.tittle}
                style={{ width: '100%' }} />
        </div>
    )
}
const TextForm = ({ name, txt, handleChange, handleSubmit, data }) => {
    return <div className='create-content inputForm'>
        <textarea name={name} type="text" placeholder={txt} onChange={handleChange} value={data.content}
            style={{ width: '100%', height: '5rem', font: 'inherit' }}
            onKeyDown={e => { if (e.ctrlKey && (e.key === 'Enter')) { handleSubmit(e) } }}></textarea>
    </div>
}

export default Create;
