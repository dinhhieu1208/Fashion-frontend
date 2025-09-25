import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ShoppingCart, UserPlus, Shirt, DollarSign } from "lucide-react";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const chartOptions = (title) => ({
  responsive: true,
  plugins: {
    title: {
      display: !!title,
      text: title,
    },
    legend: {
      labels: { color: "#374151" },
    },
  },
  scales: {
    x: {
      ticks: { color: "#6B7280" },
      grid: { color: "#E5E7EB" },
    },
    y: {
      ticks: { color: "#6B7280" },
      grid: { color: "#E5E7EB" },
    },
  },
});

const AdminDashboard = () => {
  const [timeRangeOrder, setTimeRangeOrder] = useState("week");
  const [timeRangeRevenue, setTimeRangeRevenue] = useState("month");

  const [orderData, setOrderData] = useState({ labels: [], datasets: [] });
  const [revenueData, setRevenueData] = useState({ labels: [], datasets: [] });

  // Orders (đơn hàng)
  useEffect(() => {
    const datasets = {
      day: {
        labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
        data: [12, 18, 25, 22, 30, 28, 15],
      },
      week: {
        labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
        data: [95, 120, 135, 150],
      },
      month: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12",
        ],
        data: [320, 280, 350, 400, 420, 500, 470, 510, 480, 530, 450, 490],
      },
    };

    const current = datasets[timeRangeOrder];
    setOrderData({
      labels: current.labels,
      datasets: [
        {
          label: "Số đơn hàng",
          data: current.data,
          borderColor: "#3B82F6",
          backgroundColor: "#BFDBFE",
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    });
  }, [timeRangeOrder]);

  // Revenue (doanh thu)
  useEffect(() => {
    const rawData = {
      day: {
        labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
        data: [5, 7, 6, 8, 10, 12, 9],
      },
      week: {
        labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
        data: [45, 60, 70, 85],
      },
      month: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12",
        ],
        data: [120, 150, 180, 200, 250, 280, 300, 320, 290, 310, 270, 300], // triệu
      },
    };

    const current = rawData[timeRangeRevenue];
    const finalData = current.data.map((x) => x * 1000000); // đổi về VND

    setRevenueData({
      labels: current.labels,
      datasets: [
        {
          label: "Doanh thu (VND)",
          data: finalData,
          borderColor: "#10B981",
          backgroundColor: "#6EE7B7",
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    });
  }, [timeRangeRevenue]);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <Card
          title="Đơn hàng hôm nay"
          value="58"
          growth="+15%"
          color="bg-gradient-to-tr from-blue-500 to-purple-600"
          icon={ShoppingCart}
        />
        <Card
          title="Khách hàng mới"
          value="22"
          growth="+10%"
          color="bg-gradient-to-tr from-green-500 to-emerald-400"
          icon={UserPlus}
        />
        <Card
          title="Sản phẩm bán chạy"
          value="Áo thun Basic"
          growth="+8%"
          color="bg-gradient-to-tr from-pink-500 to-rose-400"
          icon={Shirt}
        />
        <Card
          title="Doanh thu hôm nay"
          value="12,5tr"
          growth="+6%"
          color="bg-gradient-to-tr from-orange-500 to-yellow-500"
          icon={DollarSign}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartBox
          title="Thống kê đơn hàng"
          description="Tăng 12% so với kỳ trước"
          value={timeRangeOrder}
          onChange={setTimeRangeOrder}
          options={[
            { value: "day", label: "Ngày" },
            { value: "week", label: "Tuần" },
            { value: "month", label: "Tháng" },
          ]}
          data={orderData}
        />

        <ChartBox
          title="Doanh thu"
          description="Tăng 8% so với kỳ trước"
          value={timeRangeRevenue}
          onChange={setTimeRangeRevenue}
          options={[
            { value: "day", label: "Ngày" },
            { value: "week", label: "Tuần" },
            { value: "month", label: "Tháng" },
          ]}
          data={revenueData}
        />
      </div>
    </div>
  );
};

// Card Component
// Card Component
const Card = ({ title, value, growth, color, icon: Icon }) => (
  <div className="bg-white text-slate-800 rounded-2xl p-4 shadow-xl flex items-center">
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full text-white mr-4 ${color}`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-slate-500">{title}</p>
      <h4 className="text-xl font-bold">{value}</h4>
      <p
        className={`text-sm font-semibold ${
          growth.includes("-") ? "text-red-500" : "text-green-500"
        }`}
      >
        {growth} so với hôm qua
      </p>
    </div>
  </div>
);

// Chart Box Component
const ChartBox = ({ title, description, value, onChange, options, data }) => (
  <div className="bg-white rounded-2xl p-6 shadow-xl text-slate-800">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm px-3 py-1.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
    <Line data={data} options={chartOptions("")} />
  </div>
);

export default AdminDashboard;
