import React, { useState } from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';

const CategoryTable = () => {
  // Dữ liệu mẫu cho categories
  const [categories, setCategories] = useState([
    {
      id: 1,
      ten: 'Điện tử',
      hinhAnh: 'https://via.placeholder.com/50x50/4F46E5/white?text=DT',
      trangThaiHoatDong: true,
      ngayTao: '2024-01-15'
    },
    {
      id: 2,
      ten: 'Thời trang',
      hinhAnh: 'https://via.placeholder.com/50x50/EF4444/white?text=TT',
      trangThaiHoatDong: true,
      ngayTao: '2024-02-20'
    },
    {
      id: 3,
      ten: 'Gia dụng',
      hinhAnh: 'https://via.placeholder.com/50x50/10B981/white?text=GD',
      trangThaiHoatDong: false,
      ngayTao: '2024-03-10'
    },
    {
      id: 4,
      ten: 'Sách',
      hinhAnh: 'https://via.placeholder.com/50x50/F59E0B/white?text=S',
      trangThaiHoatDong: true,
      ngayTao: '2024-04-05'
    }
  ]);

  // Hàm xử lý chỉnh sửa
  const handleEdit = (id) => {
    alert(`Chuyển đến trang chỉnh sửa category ID: ${id}`);
    // Trong thực tế, bạn sẽ sử dụng React Router để navigate
    // navigate(`/category/edit/${id}`);
  };

  // Hàm xử lý xóa
  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa category này?')) {
      setCategories(categories.filter(cat => cat.id !== id));
      alert(`Đã xóa category ID: ${id}`);
    }
  };

  // Hàm xử lý xem chi tiết
  const handleView = (id) => {
    alert(`Xem chi tiết category ID: ${id}`);
    // Trong thực tế có thể mở modal hoặc navigate đến trang detail
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Danh Sách Category</h2>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg w-[1170px]">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <th className="px-6 py-4 text-left font-semibold">ID</th>
              <th className="px-6 py-4 text-left font-semibold">Hình Ảnh</th>
              <th className="px-6 py-4 text-left font-semibold">Tên Category</th>
              <th className="px-6 py-4 text-center font-semibold">Trạng Thái</th>
              <th className="px-6 py-4 text-left font-semibold">Ngày Tạo</th>
              <th className="px-6 py-4 text-center font-semibold">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr 
                key={category.id} 
                className={`border-b hover:bg-gray-50 transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  #{category.id}
                </td>
                <td className="px-6 py-4">
                  <img 
                    src={category.hinhAnh} 
                    alt={category.ten}
                    className="w-12 h-12 rounded-lg object-cover shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {category.ten}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    category.trangThaiHoatDong 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {category.trangThaiHoatDong ? 'Hoạt động' : 'Ngừng hoạt động'}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {new Date(category.ngayTao).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => handleView(category.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                      title="Xem chi tiết"
                    >
                      <Eye size={18} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleEdit(category.id)}
                      className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors duration-200 group"
                      title="Chỉnh sửa"
                    >
                      <Edit size={18} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                      title="Xóa"
                    >
                      <Trash2 size={18} className="group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <img 
                  src={category.hinhAnh} 
                  alt={category.ten}
                  className="w-16 h-16 rounded-lg object-cover shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{category.ten}</h3>
                  <p className="text-sm text-gray-500">ID: #{category.id}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                category.trangThaiHoatDong 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {category.trangThaiHoatDong ? 'Hoạt động' : 'Tạm dừng'}
              </span>
            </div>
            
            <div className="border-t pt-3">
              <p className="text-sm text-gray-600 mb-3">
                Ngày tạo: {new Date(category.ngayTao).toLocaleDateString('vi-VN')}
              </p>
              
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleView(category.id)}
                  className="flex items-center px-3 py-2 text-blue-600 bg-blue-50 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  <Eye size={16} className="mr-1" />
                  Xem
                </button>
                <button
                  onClick={() => handleEdit(category.id)}
                  className="flex items-center px-3 py-2 text-yellow-600 bg-yellow-50 rounded-lg text-sm font-medium hover:bg-yellow-100 transition-colors"
                >
                  <Edit size={16} className="mr-1" />
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="flex items-center px-3 py-2 text-red-600 bg-red-50 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                >
                  <Trash2 size={16} className="mr-1" />
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Không có category nào</p>
        </div>
      )}
    </div>
  );
};

export default CategoryTable;