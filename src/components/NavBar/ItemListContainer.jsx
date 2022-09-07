import React from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'


export const ItemListContainer = ({texto}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }

    return (
        <>
            <ItemCount initial={3} stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer