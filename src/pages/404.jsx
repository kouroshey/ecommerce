import { Link } from "react-router-dom";

function Error404() {
  return (
    <main className="flex justify-center items-center w-screen h-screen flex-col gap-6">
      <span className="text-pink text-[10rem]">404</span>
      <span className="">متاسفانه صفحه مورد نظر شما یافت نشد!</span>
      <Link to='/' className="border rounded-md px-4 py-2 border-pink hover:bg-pink hover:text-white transition">بازگشت به صفحه اصلی</Link>
    </main>
  );
}

export default Error404;
