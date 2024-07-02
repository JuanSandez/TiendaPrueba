import React from 'react'
import Item from '../Item/Item'



const ItemList = ({product}) => {
    return (
        
    product.map((data) => (
        
        <div key={data.id} >
            <div className="col">

            <Item key={data.id} {...data}/>
            </div>
            
        </div>
    ))

  )
}

export default ItemList
