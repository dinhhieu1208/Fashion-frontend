import { useState, useEffect } from "react";
import CartTotal from "./CartTotal";
import momo from "../../assets/images/momo.webp";
import bank1 from "../../assets/images/bank-2.png";
import { Trash2 } from "lucide-react";
import { profileUser } from "@/services/authService";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/services/orderService";

const Cart = () => {
  const navigate = useNavigate();
  const currency = "₫";

  const [cartData, setCartData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [method, setMethod] = useState("offline");
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      setCartData(JSON.parse(cartStorage));
    }
  }, []);

  const syncCart = (updated) => {
    setCartData(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQuantity = (id, size, newQuantity) => {
    if (newQuantity < 1) return;
    const updated = cartData.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: newQuantity }
        : item
    );
    syncCart(updated);
  };

  const removeItem = (id, size) => {
    const updated = cartData.filter(
      (item) => !(item.id === id && item.size === size)
    );
    syncCart(updated);
    setSelectedItems((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size))
    );
  };

  const toggleSelect = (item) => {
    const exists = selectedItems.some(
      (i) => i.id === item.id && i.size === item.size
    );

    setSelectedItems((prev) =>
      exists
        ? prev.filter((i) => !(i.id === item.id && i.size === item.size))
        : [...prev, item]
    );
  };

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (res) => {
      console.log(res.data);
      toast.success("Thanh toán thành công");
      const remaining = cartData.filter(
        (item) =>
          !selectedItems.some(
            (sel) => sel.id === item.id && sel.size === item.size
          )
      );
      syncCart(remaining);
      setSelectedItems([]);
      if (res.data.url) {
        window.location.href = res.data.url;
      } else if (method === "offline") {
        navigate("/cart/success");
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message);
    },
    retry: false,
  });

  const handleOrder = async () => {
    if (selectedItems.length === 0) {
      toast.error("Vui lòng chọn ít nhất một sản phẩm để thanh toán");
      return;
    }

    try {
      await profileUser();
      mutation.mutate({
        arrayOrder: selectedItems,
        coupon: coupon,
        paymentMethod: method,
      });
    } catch {
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

      <div>
        {cartData.length === 0 ? (
          <p className="text-gray-500 mt-6">Giỏ hàng trống</p>
        ) : (
          cartData.map((item, index) => {
            const isChecked = selectedItems.some(
              (i) => i.id === item.id && i.size === item.size
            );

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[0.5fr_4fr_0.5fr_0.5fr] sm:grid-cols-[0.5fr_4fr_2fr_0.5fr] items-center gap-4"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleSelect(item)}
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                />

                <div className="flex items-start gap-6">
                  <img className="w-16 sm:w-20" src={item.image} />

                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="text-[#e8002d] font-bold">
                        {item.quantity} x {item.price.toLocaleString("vi-VN")}{" "}
                        {currency}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <input
                  onChange={(e) =>
                    updateQuantity(item.id, item.size, Number(e.target.value))
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  value={item.quantity}
                />

                <button onClick={() => removeItem(item.id, item.size)}>
                  <Trash2 className="text-red-500 w-5 h-5" />
                </button>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal cartItems={selectedItems} />

          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Phương thức thanh toán
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label
              onClick={() => setMethod("momo")}
              className={`flex flex-col items-center gap-2 border rounded-xl p-4 cursor-pointer hover:shadow-md ${
                method === "momo"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <img src={momo} className="w-10 h-10" />
              <span className="text-sm font-medium text-center">
                Thanh toán qua Momo
              </span>
            </label>

            <label
              onClick={() => setMethod("bank")}
              className={`flex flex-col items-center gap-2 border rounded-xl p-4 cursor-pointer hover:shadow-md ${
                method === "bank"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <img src={bank1} className="w-10 h-10" />
              <span className="text-sm font-medium text-center">
                Chuyển khoản Ngân hàng
              </span>
            </label>

            <label
              onClick={() => setMethod("offline")}
              className={`flex flex-col items-center gap-2 border rounded-xl p-4 cursor-pointer hover:shadow-md ${
                method === "offline"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <img
                src="https://mcdn.coolmate.me/image/October2024/mceclip2_42.png"
                className="w-10 h-10"
              />
              <span className="text-sm font-medium text-center">
                Thanh toán khi nhận hàng
              </span>
            </label>
          </div>

          <div className="mt-6">
            <label className="block mb-3 text-xl font-bold">Mã giảm giá</label>
            <select
              className="w-full h-[42px] px-3 rounded-lg border border-gray-400"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            >
              <option value="">Chưa chọn</option>
              <option value="ABC">ABC</option>
            </select>
          </div>
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
