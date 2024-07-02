export default function DisplayContent({ name, image, content, change, id }) {
  return (
    <>
      <div className="mx-16 my-10" id={id}>
        <div
          className={`flex gap-16 justify-between ${
            change && `flex-row-reverse`
          }`}
        >
          <div className=" col-span-3">
            <h3 className="text-[#a72666] text-3xl my-4 font-semibold max-w-[600px]">
              {name}
            </h3>
            <div>
              <p className=" leading-8 text-lg text-justify max-w-[600px]">
                {content}
              </p>
              <button className="my-5 bg-[#fd1b1b] px-6 py-2 text-white rounded-[5px] text-[16px]">
                Read More
              </button>
            </div>
          </div>
          <img
            src={image}
            alt={name}
            className="w-[550px] rounded-xl my-auto"
          />
        </div>
      </div>
    </>
  );
}
