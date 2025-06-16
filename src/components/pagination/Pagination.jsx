const Pagination = () => {
  return (
    <section className="w-full h-[65px] flex items-center justify-center ">
      <div
        className=" flex w-full items-center justify-between mx-[90px] flex-wrap
           max-sm:mx-[30px] max-sm:justify-center max-sm:gap-[10px] "
      >
        <div>
          <p
            class="text-sm text-[#EAEAEA]
          max-sm:text-[0.6rem] "
          >
            Showing
            <span class="font-medium"> 1 </span>
            to
            <span class="font-medium"> 10 </span>
            of
            <span class="font-medium"> 97 </span>
            results
          </p>
        </div>

        <div className=" flex items-center justify-center w-auto h-auto gap-[20px] ">
          <div className=" flex items-center justify-center w-auto h-auto">
            <button
              className="p-[15px] w-[150px] h-full rounded-[5px] 
              transition-all duration-[0.7s] bg-[#2e2e2e49]
            max-sm:w-[120px] max-sm:text-[0.9rem] max-sm:border-2 max-sm:border-[#2E2E2E]
            max-sm:hover:bg-[#0E0E0E] cursor-pointer "
            >
              Previous
            </button>
          </div>

          <div className="flex items-center justify-center w-auto h-auto">
            <button
              className="p-[15px] w-[150px] h-full rounded-[5px] 
              transition-all duration-[0.7s] bg-[#2e2e2e49]
            max-sm:w-[120px] max-sm:text-[0.9rem] max-sm:border-2 max-sm:border-[#2E2E2E]
            max-sm:hover:bg-[#0E0E0E] cursor-pointer "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pagination;
