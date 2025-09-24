import React, { useState } from "react";
import CartTotal from "./CartTotal";
import bank1 from "../../assets/images/bank-2.png";
import momo from "../../assets/images/momo.webp";
// Dữ liệu giỏ hàng mẫu
const sampleCart = [
  {
    _id: "1",
    name: "Áo Thun Unisex Basic",
    image: "/images/clother-1.jpg",
    price: 150000,
    size: "M",
    quantity: 2,
  },
  {
    _id: "2",
    name: "Quần Jean Nam Rách Gối",
    image: "/images/clother-2.jpg",
    price: 200000,
    size: "L",
    quantity: 1,
  },
];

const Payment = () => {
  const [cartData] = useState(sampleCart);
  const [method, setMethod] = useState("cod"); // mặc định COD
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      address: formData,
      items: cartData,
      amount:
        cartData.reduce((sum, item) => sum + item.price * item.quantity, 0) +
        30000, // phí ship mẫu
      method,
    };

    if (method === "momo") {
      alert(
        "Chuyển hướng đến Momo để thanh toán...\n" +
          JSON.stringify(orderData, null, 2)
      );
    } else if (method === "bank") {
      alert(
        "Chuyển hướng đến trang thanh toán ngân hàng...\n" +
          JSON.stringify(orderData, null, 2)
      );
    } else {
      console.log(orderData);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-between gap-4 pt-10 min-h-[80vh] border-t"
      >
        {/* Thông tin giao hàng */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <h2 className="text-xl sm:text-2xl font-bold my-3">
            Thông tin giao hàng
          </h2>

          <div className="flex gap-3">
            <input
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Họ"
            />
            <input
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Tên"
            />
          </div>

          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email"
          />

          <input
            required
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Địa chỉ nhà"
          />

          <div className="flex gap-3">
            <input
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Quận, huyện"
            />
            <input
              required
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Thành phố"
            />
          </div>

          <div className="flex gap-3">
            <input
              required
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="Mã bưu chính"
            />
            <input
              required
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Quốc gia"
            />
          </div>

          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Số điện thoại"
          />
        </div>

        {/* Giỏ hàng + thanh toán */}
        <div className="mt-8 w-full sm:max-w-[480px]">
          <CartTotal />

          {/* Phương thức thanh toán */}
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
                <input
                  type="radio"
                  checked={method === "momo"}
                  readOnly
                  className="hidden"
                />
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
                <input
                  type="radio"
                  checked={method === "bank"}
                  readOnly
                  className="hidden"
                />
              </label>

              <label
                onClick={() => setMethod("cod")}
                className={`flex flex-col items-center justify-center gap-2 border rounded-xl p-4 cursor-pointer transition hover:shadow-md ${
                  method === "cod"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <span className="text-center text-sm font-medium">
                  Thanh toán khi nhận hàng (COD)
                </span>
                <input
                  type="radio"
                  checked={method === "cod"}
                  readOnly
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
