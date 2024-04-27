import { createContext, useState } from 'react';

const ProductContext = createContext();

function ProductContextProvider(props) {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleRemoveItems() {}

  const providerValue = {
    items: items,
    onAddItems: handleAddItems,
    onRemoveItems: handleRemoveItems,
  };

  return (
    <ProductContext.Provider value={providerValue}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
export { ProductContextProvider };
