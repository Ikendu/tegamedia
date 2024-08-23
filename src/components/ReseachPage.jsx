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
      <div className="flex gap-5 items-center justify-center">
        {data.map((item, idx) => (
          <a href={`#${item?.id}`} key={idx} className="cursor-pointer">
            <img
              src={item?.image}
              alt={item?.name}
              className="md:h-16 md:rounded-xl rounded min-w-10 min-h-10 flex object-cover"
              title={item?.name}
            />
          </a>
        ))}
      </div>
      <div className="hidden md:block">
        <DisplayContent
          name={data[0].name}
          image={data[0].image}
          content={data[0].content}
          id={data[0].id}
          link={data[0].link}
        />
        <DisplayContent
          name={data[1].name}
          image={data[1].image}
          content={data[1].content}
          change={change}
          id={data[1].id}
          link={data[1].link}
        />
        <DisplayContent
          name={data[2].name}
          image={data[2].image}
          content={data[2].content}
          id={data[2].id}
          link={data[2].link}
        />
        <DisplayContent
          name={data[3].name}
          image={data[3].image}
          content={data[3].content}
          change={change}
          id={data[3].id}
          link={data[3].link}
        />
        <DisplayContent
          name={data[4].name}
          image={data[4].image}
          content={data[4].content}
          id={data[4].id}
          link={data[4].link}
        />
        <DisplayContent
          name={data[5].name}
          image={data[5].image}
          content={data[5].content}
          change={change}
          id={data[5].id}
          link={data[5].link}
        />
        <div className="flex gap-4 items-center justify-center">
          <div className="w-[250px] h-[1px] bg-[#910249] mt-4"></div>
          <div className="text-4xl font-bold text-center">
            Research Commentary
          </div>
          <div className="w-[250px] h-[1px] bg-[#910249] mt-4"></div>
        </div>

        <DisplayContent
          name={data[6].name}
          image={data[6].image}
          content={data[6].content}
          id={data[6].id}
          link={data[6].link}
        />
      </div>
      <div className="md:hidden my-16">
        {data.map((item, idx) => (
          <div className="my-10">
            <div className="text-2xl my-4 text-[#a72666] ">{item.name}</div>
            <img
              src={item.image}
              alt={item.name}
              className="w-screen max-h-[300px] object-cover rounded"
            />
            <div className=" my-4 text-justify">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
