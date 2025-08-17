export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      <p className="text-gray-600 mt-4">Đang tải...</p>
    </div>
  );
}