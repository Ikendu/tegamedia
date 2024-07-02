export default function Footer() {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex w-full justify-between px-20">
        <div>
          <p>Professional enquiries</p>
          <p>teganmosugu.tjm@gmail.com</p>
        </div>
        <div>
          <p>Address</p>
          <p>USA | Canada | Nigeria</p>
        </div>
        <div>
          <p>Connect</p>
          <div>
            <img />
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="flex w-full justify-center mt-10 ">
        <p className="text-center">© 2024, Tegan Mosugu.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
