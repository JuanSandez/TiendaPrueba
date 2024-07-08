import React, { createContext, useState } from "react";

const Context = createContext()
export const ContextProvider = ({ children }) => { 

  const [cart, setCart] = useState([])

  const addItem = (productToAdd, quantity) => {
    const newProduct = {
      ...productToAdd,
      quantity
    }
    
    if(isInCart(newProduct.id)){
      const updatedCart = cart.map((el) => {
        if(el.id === newProduct.id) {
          return {...el, quantity: el.quantity + newProduct.quantity}
        }
        return el
      })
      setCart(updatedCart)
    }else {
      setCart([...cart, newProduct])
    }
  }
  //Si hay producto repetido, que se sume a la cantidad y no que se haga un
  //objeto nuevo
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

   const removeItem = (id) => { // 1)El parametro "id" representa el identificador 
    //del producto que se quiere eliminar del carrito.

    const deleteItem = cart.filter((prod) => prod.id !==id)
    // 3) Se llama a setCart para actualizar el estado del carrito con el nuevo array 
    //deleteItem, que ya no incluye el producto eliminado.
    setCart([...deleteItem])
  }

  const getTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    return total
  }

  const clearCart = () =>{
    setCart([])
  }
  const getQuantity = () => {
    let total = 0
    cart.forEach((prod) =>{
      total = total + prod.quantity
    })
    return total
  }


  

  return (
  <Context.Provider  
    value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      getQuantity,
      getTotal
    }}
    >
      {children} 
      </Context.Provider>
      
  )
}

export default Context;

