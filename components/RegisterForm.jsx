// components/RegisterForm.jsx
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm({ onSwitchToLogin, onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic xử lý đăng ký bằng email/mật khẩu sẽ ở đây
        console.log("Register form submitted");
        onClose(); // Đóng modal sau khi gửi form
    };

    const handleGoogleSignIn = () => {
        signIn("google"); // Gọi hàm signIn với provider 'google'
        onClose(); // Đóng modal sau khi chuyển hướng
    };

    return (
        <div className="p-6 bg-white rounded-b-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Đăng ký</h3>

            {/* Nút Đăng ký bằng Google */}
            <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors mb-4"
            >
                <FcGoogle className="w-5 h-5 mr-2" />
                Đăng ký với Google
            </button>

            {/* Dải phân cách */}
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500">Hoặc</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Form Đăng ký bằng Email */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="register-email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="register-email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="register-password"
                    >
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        id="register-password"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="register-confirm-password"
                    >
                        Xác nhận mật khẩu
                    </label>
                    <input
                        type="password"
                        id="register-confirm-password"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition-colors"
                >
                    Đăng ký
                </button>
            </form>

            {/* Chuyển sang form Đăng nhập */}
            <p className="mt-4 text-sm text-center text-gray-600">
                Bạn đã có tài khoản?{" "}
                <button
                    onClick={onSwitchToLogin}
                    className="text-blue-500 hover:underline"
                >
                    Đăng nhập ngay
                </button>
            </p>
        </div>
    );
}
