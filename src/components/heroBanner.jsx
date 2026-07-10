export default function HeroBanner() {
    return (
        <>
          <div className="h-130 bg-[#FFF2DB] justify-center flex px-25 py-10">
              <div className="flex flex-col justify-between container">
                    <div>
                        <h1 className="w-fit border-b-2 py-2 pr-5 font-semibold sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
                             FASHION <br/> THAT <br/> MOVES <br/> WITH YOU
                        </h1>
                    </div>

                    <h1 className="text-center font-semibold sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[280px] 2xl:text-[14px] p-0 m-0">
                             GEN-Z
                    </h1>

                    <div className="flex justify-between items-end">
                        <div className="flex gap-2">
                            <button className="bg-[#F62440] text-white xl:px-7 xl:py-2 hover:bg-gray-800">
                                Shop Now
                            </button>
                            <button className="text-black xl:px-4 xl:text-[14px] font-semibold border-b-2 hover:bg-gray-800">
                                Explore Now
                            </button>
                        </div>
                        <h1 className="border-b-2 py-2 font-semibold sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
                            NEW <br/> COLLECTION <br/> 2026 
                        </h1>
                    </div>
              </div>
          </div>
        </>
    )
}