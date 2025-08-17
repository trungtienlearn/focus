// components/LoginForm.jsx
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm({ onSwitchToRegister, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic xử lý đăng nhập bằng email/mật khẩu sẽ ở đây
    console.log("Login form submitted");
    onClose(); // Đóng modal sau khi gửi form
  };

  const handleGoogleSignIn = () => {
    signIn("google"); // Gọi hàm signIn với provider 'google'
    onClose(); // Đóng modal sau khi chuyển hướng
  };

  return (
    <div className="p-6 bg-white rounded-b-lg">
      <h3 className="text-2xl font-bold text-center mb-6">Đăng nhập</h3>
      
      {/* Nút Đăng nhập bằng Google */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors mb-4"
      >
        <FcGoogle className="w-5 h-5 mr-2" />
        Đăng nhập với Google
      </button>

      {/* Dải phân cách */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500">Hoặc</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Form Đăng nhập bằng Email */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="login-email">
            Email
          </label>
          <input
            type="email"
            id="login-email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="login-password">
            Mật khẩu
          </label>
          <input
            type="password"
            id="login-password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Đăng nhập
        </button>
      </form>

      {/* Chuyển sang form Đăng ký */}
      <p className="mt-4 text-sm text-center text-gray-600">
        Chưa có tài khoản?{" "}
        <button
          onClick={onSwitchToRegister}
          className="text-blue-500 hover:underline"
        >
          Đăng ký ngay
        </button>
      </p>
    </div>
  );
}