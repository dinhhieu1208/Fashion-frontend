import React from "react";
import { toast, Toaster } from "sonner";
const ActionDetailProduct = (props) => {
  const handleAddToCart = () => {
    toast.success("Thêm vào giỏ hàng thành công");
    const { product, quantity, selectedSize } = props;
    const arrayCart = [];
    arrayCart.push({
      id: product.id,
      name: product.name,
      image: product.image || "",
      size: selectedSize || "M",
      quantity: quantity,
      price: product.currentPrice,
    });

    const cartStorage = localStorage.getItem("cart");
    if (cartStorage == null) {
      localStorage.setItem("cart", JSON.stringify(arrayCart));
      const res = localStorage.getItem("cart");
      console.log(JSON.parse(res));
    } else {
      const res = JSON.parse(cartStorage);
      const arrayCartUpdate = [];
      let check = false;
      for (const item of res) {
        if (item.id === product.id) {
          item.quantity = quantity;
          item.size = selectedSize || "M";
          check = true;
        }

        arrayCartUpdate.push(item);
      }

      console.log(arrayCart.length);
      if (arrayCart.length > 0 && check === false) {
        arrayCartUpdate.push(arrayCart[0]);
      }

      arrayCartUpdate.reverse();

      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(arrayCartUpdate));
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className=" flex-1 py-3 bg-black border rounded-lg text-white font-semibold hover:bg-gray-500"
    >
      THÊM VÀO GIỎ
    </button>
  );
};

export default ActionDetailProduct;
