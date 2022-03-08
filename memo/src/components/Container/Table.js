import React from 'react';

const Table = (props) => {
    const { mega, handleClear, handleEdit } = props
    return (
        <table>
            <thead>
                <th>No.</th>
                <th className='tittle'>Tittle</th>
                <th className='content'>Content</th>
                <th>Action</th>
            </thead>
            {mega.map((ele, index) => {
                return (
                    <tbody key={ele.id} id={ele.id}>
                        <td>{index + 1}</td>
                        <td className='tittle'><strong>{ele.tittle}</strong></td>
                        <td className='content'>{ele.content}</td>
                        <td>
                            <div>
                                <button className='btn' onClick={handleEdit}>Edit</button>
                                <button className='btn' onClick={handleClear}>Clear</button>
                            </div>
                        </td>
                    </tbody>
                )
            })}

        </table>
    );
}

export default Table;
