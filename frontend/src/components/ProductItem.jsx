import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function ProductItem({ id, image, name, price }) {

    const {currency} = useContext(ShopContext);

  return <div>
    
  </div>;
}

export default ProductItem;
