import { useState } from "react";
import { toast } from "react-toastify";

import ProductContext from "./Context";

const Provider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  const addProduct = (product) => {
    let tempCart = cart.filter((value) => value.id === product.id);

    if (tempCart.length > 0) {
      toast.error("product is already in the cart");
    } else {
      setCart([...cart, product]);
      setCartValue(cartValue + product.price);
      toast.success("Product is added");
    }
  };

  const removeProduct = (id) => {
    let item = cart.filter((value) => value.id === id);
    setCart(cart.filter((value) => value.id !== id));
    setCartValue(cartValue - item[0].price);

    toast.success(item[0].title + " is removed from the cart");
  };
  return (
    <ProductContext.Provider
      value={{ cart, cartValue, addProduct, removeProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default Provider;
