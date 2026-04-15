import { FaCheck } from "react-icons/fa";

export default function Success() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#202808]">
  <div className="flex flex-col items-center justify-center bg-[#F8F8F2] px-12 py-10 rounded-2xl shadow-lg">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#CFE7D2]">
        <FaCheck className="text-[#202808] text-lg" />
      </div>

      <h1 className="text-xl font-semibold text-[#202808]">
        Order Placed Successfully!
      </h1>
    </div>

    <p className="text-sm text-gray-500 mt-3">
      Thank you for your purchase
    </p>
  </div>
</div>
  );
}