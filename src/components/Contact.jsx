import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import DiscountBox from "./DiscountBox";
import contact from "../assets/images/contact2.jpg";
const Contact = () => {
  const [state, handleSubmit] = useForm("xeokwkeg");
  if (state.succeeded) {
    return <p>Cảm ơn bạn đã gửi lời nhắn cho Shop!</p>;
  }

  return (
    <div className="">
      <div className="text-center text-2xl pt-10 border-t md:px-4 md:py-4">
        <div className="inline-flex gap-2 items-center mb-3">
          <span className="text-gray-500 font-medium">
            Liên hệ về chúng tôi
          </span>
        </div>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-4 md:px-0">
        <img
          className="w-full md:max-w-[480px] rounded-lg object-cover"
          src={contact}
          alt="contact"
        />

        {/* Nội dung */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">
            Nơi giải đáp toàn bộ mọi thắc mắc của bạn?
          </p>
          <p className="text-gray-500">
            123 Nguyễn Trãi <br />
            Quận 1, TP. Hồ Chí Minh, Việt Nam
          </p>
          <p className="text-gray-500">
            Số điện thoại chủ shop: 039 4996777 <br />
            Email: dinhhieu1208@gmail.com
          </p>
          <p className="text-gray-500">
            Hotline: 059 2016789 <br />
            Email: 28.shop@gmail.com
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full sm:w-[500px]"
          >
            <label htmlFor="email">Email liên hệ của bạn</label>
            <input
              id="email"
              type="email"
              name="email"
              className="border p-2 rounded"
              placeholder="Nhập email của bạn..."
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              className="border p-2 rounded"
              placeholder="Hãy lại lời nhắn của bạn..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              className="bg-black text-white border rounded border-black px-8 py-2 text-sm hover:bg-gray-400 hover:text-black transition-all duration-300"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <DiscountBox />
    </div>
  );
};

export default Contact;
