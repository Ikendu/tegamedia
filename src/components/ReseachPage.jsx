import Finder from "../assets/Finder";
import { data } from "../data";

export default function ReseachPage() {
  return (
    <div>
      <h1 className="text-center my-20 text-5xl font-bold text-[#892185] border-b-4 py-4">
        Research
      </h1>
      <div>
        {data.map((item, idx) => (
          <div key={idx}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
