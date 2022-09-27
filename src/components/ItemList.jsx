import React from 'react';
import Item from './Item'

const ItemList = (props) => {

  return (
    
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
{props.data.map((item, index) => (
          <Item data={item} key={index} />
        ))}
</div>
  );
};

export default ItemList;