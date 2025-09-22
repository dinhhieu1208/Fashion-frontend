import { useQuery } from "@tanstack/react-query";
import { getAllBranchClient } from "@/services/branchService";
export default function StoreLocationPage() {
  const { data } = useQuery({
    queryKey: ["branch"],
    queryFn: getAllBranchClient,
  });

  return (
    <main>
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] w-full px-5 mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Hệ thống cửa hàng
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data?.data.map((store) => (
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
