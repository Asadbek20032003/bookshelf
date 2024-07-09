import error404 from "../assets/images/error404.png";
const Error = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="absolute items-center justify-center flex flex-col w-[720px] h-[588px] ">
        <div className=" border-dashed border-b-0 border-[1px] ">
          <img src={error404} alt="404 page not found" />
        </div>
        <div className="flex justify-center  items-center mt-72px gap-[12px] w-full mt-[72px]">
          <button className="w-full rounded-[4px] pt-[10px] pl-[24px] pr-[24px] pb-[10px] bg-[#6200EE] text-[#ffff]">
            Go Home Page
          </button>
          <button className="w-full rounded-[4px] pt-[10px] pl-[24px] pr-[24px] pb-[10px] text-[#6200EE] bg-transparent hover:bg-[#6200EE] hover:text-[#ffff] border-[1px] border-[#6200EE] ">
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
