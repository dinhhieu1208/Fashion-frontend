import React from "react";
import location from "../../assets/images/location.jpg";
import location1 from "../../assets/images/location1.jpg";
import location2 from "../../assets/images/location2.jpg";
export default function StoreLocationPage() {
  const stores = [
    {
      id: "1",
      name: "Shop Quần Áo Quận 1",
      address: "123 Nguyễn Trãi, Quận 1, TP.HCM",
      phone: "0901 111 111",
      image: location,
    },
    {
      id: "2",
      name: "Shop Quần Áo Quận 3",
      address: "456 Cách Mạng Tháng 8, Quận 3, TP.HCM",
      phone: "0902 222 222",
      image: location1,
    },
    {
      id: "3",
      name: "Shop Quần Áo Bình Thạnh",
      address: "789 Điện Biên Phủ, Bình Thạnh, TP.HCM",
      phone: "0903 333 333",
      image: location2,
    },
  ];

  return (
    <main>
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] w-full px-5 mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Hệ thống cửa hàng
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stores.map((store) => (
              <div
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
                key={store.id}
              >
                <img src={store.image} className="w-full h-52 object-cover" />
                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-2">{store.name}</h4>
                  <p className="text-gray-600">{store.address}</p>
                  <p className="text-gray-600">Điện thoại: {store.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
