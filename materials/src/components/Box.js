import React from 'react';
import DataSrc from './DataSrc';

function ele(e) {
  console.log(e);
  return <div className='ele' key={e.id} on={e.on} >
    {e.text}
  </div>
}


export default function Box(x) {
  return <div className='box' key={x}>
    {DataSrc().map(ele)}
  </div>;
}
