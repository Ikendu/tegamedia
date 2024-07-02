export default function Footer() {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex w-full justify-between px-36">
        <div>
          <p className="text-gray-500 font-bold">Professional enquiries</p>
          <p>teganmosugu.tjm@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500 font-bold">Address</p>
          <p>USA | Canada | Nigeria</p>
        </div>
        <div>
          <p className="text-gray-500 font-bold">Connect</p>
          <div>
            <img />
            <a
              href="https://www.linkedin.com/in/teganjosephmosugu/"
              target="_blank"
              className="cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-600 my-10"></div>
      <div className="flex gap-10 w-full justify-between mt-10 text-slate-400">
        <p className="text-center">© 2024, Tegan Mosugu</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
