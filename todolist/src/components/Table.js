export default function Table(td) {
    const { arr, handleEdit, handleStatus, isBtn, handleBtn, handleClear } = td;
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
                <div>
                    <button className="btn" value={status}
                        onClick={handleStatus}>{!status ? 'Done' : 'Recheck'}
                    </button>
                    <button className="btn" onClick={handleClear}>Clear</button>
                </div>
            </div>;
        })}
        {isBtn && <div className='tableBody clBtn'><button className="btn bt " onClick={handleBtn}><strong>Close search result</strong></button></div>}
    </div>;
}