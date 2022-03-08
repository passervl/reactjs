export default function Button({ cls, type, handleClick, children }) {
    return <button type={type} className={cls + ' btn'} onClick={handleClick}>{children}</button>
}