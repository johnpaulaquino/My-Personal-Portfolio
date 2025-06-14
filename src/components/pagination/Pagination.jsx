const Pagination = () => {
  return (
    <section className="w-full h-[65px] flex items-center justify-center">
      <div className=" flex w-full items-center justify-between mx-[90px] flex-wrap">
        <div>
          <p class="text-sm text-[#EAEAEA]">
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
            <button className="p-[15px] w-[150px] h-full rounded-[5px] bg-[#2e2e2e49]">
              Previous
            </button>
          </div>

          <div className="flex items-center justify-center w-auto h-auto">
            <button className="p-[15px] w-[150px] h-full rounded-[5px] bg-[#2e2e2e49]">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pagination;                                                                                                                                      
