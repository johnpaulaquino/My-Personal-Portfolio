import DNF404 from '/src/assets/9214777.jpg';

const DataNotFound = ({ message, title }) => {
  return (
    <div className="mx-auto max-w-[1500px] h-[50vh]">
      <section className=" mx-[90px] h-full">
        <h1 className="mt-[30px] text-[#F8B500] text-[1.5rem] font-[600]">
          {title}
        </h1>
        <section className=" flex h-full flex-col items-center justify-center w-full transition-all duration-700">
          <h1 className="text-[1.5rem]">{message}</h1>
          <div
            className="w-[450px] bg-center bg-cover
                      h-[350px]"
            style={{
              backgroundImage: `url(${DNF404})`,
            }}
          ></div>
        </section>
      </section>
    </div>
  );
};

export default DataNotFound;
