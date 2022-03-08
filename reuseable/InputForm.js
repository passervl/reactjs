const InputForm = ({ key, txt, handleChange, children }) => {
    return (
        <form className='inputForm'>
            <label htmlFor={key}>{children}: </label>
            <input id={key} type="text" placeholder={txt} onChange={handleChange} value={key} />
        </form>
    )
}
export default InputForm;
