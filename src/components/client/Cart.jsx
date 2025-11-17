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
  const [selectedItems, setSelectedItems] = useState([]);
  const [method, setMethod] = useState("offline");
  const [coupon, setCoupon] = useState("");
  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      setCartData(JSON.parse(cartStorage));
    }
  }, []);

  const updateQuantity = (id, size, newQuantity) => {
    const updated = cartData.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: newQuantity }
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

  // chọn / bỏ chọn sản phẩm
  const toggleSelect = (item) => {
    const exists = selectedItems.some(
      (i) => i.id === item.id && i.size === item.size
    );
    let updated;
    if (exists) {
      updated = selectedItems.filter(
        (i) => !(i.id === item.id && i.size === item.size)
      );
    } else {
      updated = [...selectedItems, item];
    }
    setSelectedItems(updated);
  };

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (res) => {
      const paymentMethod = res.data.data;
      if (paymentMethod === "offline") {
        toast.success("Thanh toán thành công");

        // Chỉ xóa các sản phẩm được chọn khỏi giỏ hàng
        const remaining = cartData.filter(
          (item) =>
            !selectedItems.some(
              (sel) => sel.id === item.id && sel.size === item.size
            )
        );
        setCartData(remaining);
        localStorage.setItem("cart", JSON.stringify(remaining));

        setSelectedItems([]); // reset chọn
        navigate("/order/success");
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message);
      console.log(error.response?.data?.message);
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
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Vui lòng đăng nhập để thực hiện thanh toán");
      navigate("/login");
    }
  };

  const handleChange = (event) => {
    setCoupon(event.target.value);
  }

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
          cartData.map((item, index) => {
            const isChecked = selectedItems.some(
              (i) => i.id === item.id && i.size === item.size
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[0.5fr_4fr_0.5fr_0.5fr] sm:grid-cols-[0.5fr_4fr_2fr_0.5fr] items-center gap-4"
              >
                {/* Checkbox chọn */}
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleSelect(item)}
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                />

                {/* Thông tin sản phẩm */}
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {item.name}
                    </p>
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
                      : updateQuantity(
                          item.id,
                          item.size,
                          Number(e.target.value)
                        )
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
            );
          })
        )}
      </div>
      {/* Tổng tiền và thanh toán */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          {/* Tính tổng chỉ các sản phẩm được chọn */}
          <CartTotal cartItems={selectedItems} />

          {/* Chọn phương thức thanh toán */}
          <div className="">
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
                  method === "offline"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <img
                  src="https://mcdn.coolmate.me/image/October2024/mceclip2_42.png"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-center text-sm font-medium">
                  Thanh toán khi nhận hàng
                </span>
              </label>
            </div>
          </div>
          <div className="mt-6 ">
            <div className="w-full max-w-auto">
              <div className="max-w-md mx-auto ">
                <label className="block  mb-3 text-xl font-bold ">
                  Mã giảm giá
                </label>
                <div className="flex items-start space-x-2">
                  <div className="flex-grow w-full">
                    <select name="" id="" className="w-full h-[42px] px-[10px] rounded-lg bg-white border-[1px] border-gray-400"
                      onChange={handleChange}
                    >
                      <option value="">Chưa chọn</option>
                      <option value="ABC">ABC</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Nút đặt hàng */}
          <div className="w-full text-end mt-8 ">
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
