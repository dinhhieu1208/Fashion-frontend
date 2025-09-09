import React from "react";
import about from "../assets/images/aboutUs.jpg";
const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4">
      <div className="text-center text-2xl pt-10 border-t">
        <div className="inline-flex gap-2 items-center mb-3">
          <span className="text-gray-500 font-medium">
            Liên hệ về chúng tôi
          </span>
        </div>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[460px] rounded"
          src={about}
          alt="Về chúng tôi"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            <b>FASHION</b> là thương hiệu thời trang trẻ trung ra đời vào năm
            2024, chuyên cung cấp các dòng quần áo thiết kế hiện đại, chất liệu
            cao cấp và đa dạng phong cách – từ năng động, thể thao đến thanh
            lịch, sang trọng. Với phương châm “Mặc đẹp mỗi ngày”, FASHION mong
            muốn mang lại sự tự tin và phong cách riêng cho mỗi khách hàng.
          </p>
          <b className="text-gray-800 text-[18px]">Sứ mệnh</b>
          <p>
            Chúng tôi cam kết mang đến những sản phẩm thời trang chất lượng,
            thân thiện với môi trường, cập nhật xu hướng mới nhất, đồng thời giữ
            mức giá hợp lý để ai cũng có thể sở hữu trang phục đẹp và phù hợp
            với bản thân.
          </p>
          <b className="text-gray-800 text-[18px]">Tầm nhìn</b>
          <p>
            FASHION hướng đến trở thành thương hiệu thời trang hàng đầu Việt
            Nam, mở rộng hệ thống phân phối toàn quốc và từng bước vươn ra thị
            trường quốc tế, mang phong cách Việt hòa quyện cùng xu hướng toàn
            cầu.
          </p>
        </div>
      </div>

      <div className="text-center text-2xl pt-10 border-t">
        <div className="inline-flex gap-2 items-center mb-3">
          <span className="text-gray-500 font-medium">
            TẠI SAO NÊN CHỌN CHÚNG TÔI
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-[16px]">
          <b>Chất liệu cao cấp, bền đẹp:</b>
          <p className="text-gray-600">
            Sản phẩm sử dụng vải thoáng mát, co giãn tốt, giữ form lâu và an
            toàn cho làn da.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-[16px]">
          <b>Thiết kế đa dạng, bắt kịp xu hướng:</b>
          <p className="text-gray-600">
            Luôn cập nhật mẫu mã mới, phù hợp cho nhiều dịp từ đi làm, dạo phố
            đến sự kiện quan trọng.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-[16px]">
          <b>Dịch vụ chăm sóc khách hàng tận tâm:</b>
          <p className="text-gray-600">
            Hỗ trợ đổi trả dễ dàng, tư vấn phối đồ miễn phí và nhiều chương
            trình ưu đãi hấp dẫn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
