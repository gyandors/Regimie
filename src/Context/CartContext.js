import { createContext, useState } from 'react';

const CartContext = createContext();

function CartContextProvider(props) {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    //If item is already present then update the quantity
    const updatedItems = items.map((i) => {
      if (i.id === item.id) return { ...i, quantity: i.quantity + 1 };
      return i;
    });

    //If item is not present then add this item.
    if (!updatedItems.find((i) => i.id === item.id)) {
      updatedItems.push(item);
    }

    setItems(updatedItems);
  }

  function handleRemoveItems(id) {}

  const providerValue = {
    items: items,
    onAddItems: handleAddItems,
    onRemoveItems: handleRemoveItems,
  };

  return (
    <CartContext.Provider value={providerValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
export { CartContextProvider };
