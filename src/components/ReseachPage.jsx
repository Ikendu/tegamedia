// import Finder from "../assets/Finder";
import { data } from "../data";

import DisplayContent from "./DisplayContent";

export default function ReseachPage() {
  const change = true;
  return (
    <div>
      <h1 className="text-center my-20 text-5xl font-bold text-[#910249] border-b-4 py-4">
        Research
      </h1>
      <>
        <DisplayContent
          name={data[0].name}
          image={data[0].image}
          content={data[0].content}
        />
        <DisplayContent
          name={data[1].name}
          image={data[1].image}
          content={data[1].content}
          change={change}
        />
        <DisplayContent
          name={data[2].name}
          image={data[2].image}
          content={data[2].content}
        />
        <DisplayContent
          name={data[3].name}
          image={data[3].image}
          content={data[3].content}
          change={change}
        />
        <DisplayContent
          name={data[4].name}
          image={data[4].image}
          content={data[4].content}
        />
        <DisplayContent
          name={data[5].name}
          image={data[5].image}
          content={data[5].content}
          change={change}
        />
        <DisplayContent
          name={data[6].name}
          image={data[6].image}
          content={data[6].content}
        />
      </>
    </div>
  );
}
