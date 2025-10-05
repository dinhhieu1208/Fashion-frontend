import { useState, useEffect } from "react";
import CartTotal from "./CartTotal";
import momo from "../../assets/images/momo.webp";
import bank1 from "../../assets/images/bank-2.png";
import { Trash2 } from "lucide-react";
import { profileUser } from "@/services/authService";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/services/orderService";

const Cart = () => {
  const navigate = useNavigate();
  const currency = "₫";

  const [cartData, setCartData] = useState([]);
  const [method, setMethod] = useState("offline");

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      setCartData(JSON.parse(cartStorage));
    }
  }, []);

  const updateQuantity = (id, size, newQuantity) => {
    const updated = cartData.map((item) =>
      item.id === id && item.size === size
        ? {
            ...item,
            quantity: newQuantity,
          }
        : item
    );
    setCartData(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id, size) => {
    const updated = cartData.filter(
      (item) => !(item.id === id && item.size === size)
    );
    setCartData(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (res) => {
      const paymentMethod = res.data.data;
      if (paymentMethod === "offline") {
        toast.success("Thanh toán thành công");
        localStorage.removeItem("cart");
        navigate("/order/success");
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    },
    retry: false,
  });

  const handleOrder = async () => {
    try {
      await profileUser();
      mutation.mutate({
        arrayOrder: cartData,
        coupon: "",
        paymentMethod: method,
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Vui lòng đăng nhập để thực hiện thanh toán");
      navigate("/login");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4">
      <div className="flex items-center gap-2">
        <h2 className="font-bold uppercase text-lg sm:text-2xl">Tất cả</h2>
        <h2 className="font-bold uppercase text-lg sm:text-2xl">Sản phẩm</h2>
      </div>

      {/* Danh sách sản phẩm */}
      <div>
        {cartData.length === 0 ? (
          <p className="text-gray-500 mt-6">Giỏ hàng trống</p>
        ) : (
          cartData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Thông tin sản phẩm */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="text-[#e8002d] font-bold">
                      {item.quantity} x {item.price.toLocaleString("vi-VN")}
                      {currency}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Số lượng */}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item.id, item.size, Number(e.target.value))
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity}
              />

              {/* Nút xóa */}
              <button
                onClick={() => removeItem(item.id, item.size)}
                className="text-red-500 font-bold"
              >
                <Trash2 className="text-red-500 w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Tổng tiền và thanh toán */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal cartItems={cartData} />

          {/* Chọn phương thức thanh toán */}
          <div className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Phương thức thanh toán
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label
                onClick={() => setMethod("momo")}
                className={`flex flex-col items-center justify-center gap-2 border rounded-xl p-4 cursor-pointer transition hover:shadow-md ${
                  method === "momo"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <img src={momo} className="w-10 h-10 object-contain" />
                <span className="text-center text-sm font-medium">
                  Thanh toán qua Momo
                </span>
              </label>

              <label
                onClick={() => setMethod("bank")}
                className={`flex flex-col items-center justify-center gap-2 border rounded-xl p-4 cursor-pointer transition hover:shadow-md ${
                  method === "bank"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <img src={bank1} className="w-10 h-10 object-contain" />
                <span className="text-center text-sm font-medium">
                  Chuyển khoản Ngân hàng
                </span>
              </label>

              <label
                onClick={() => setMethod("offline")}
                className={`flex flex-col items-center justify-center gap-2 border rounded-xl p-4 cursor-pointer transition hover:shadow-md ${
                  method === "cod"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <img
                  src="	https://mcdn.coolmate.me/image/October2024/mceclip2_42.png"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-center text-sm font-medium">
                  Thanh toán khi nhận hàng
                </span>
              </label>
            </div>
          </div>

          {/* Nút đặt hàng */}
          <div className="w-full text-end mt-8">
            <button
              type="button"
              onClick={handleOrder}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
