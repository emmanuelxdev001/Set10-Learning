import pix from "./assets/Nigeria-Flag-PNG-Images-HD.png";
const HomeScreen = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className="w-full  grid md:grid-cols-1 grid-cols-5">
        <div className="col-span-3">
          <p className="text-[] md:text-[50px] lg:text-[80px] leading-[1.1] font-bold">
            Data2Bots Visualization1dd
          </p>
          <p className="w-[80%] text-[25px] font-medium tracking-[7px]">
            Data Speaks Volumn
          </p>
          <p>Know what data is saying about your dear Country</p>
        </div>
        <div className="col-span-2">
          <img
            src={pix}
            alt="Data Visualization"
            className="object-cover h-full w-full bg-slate-50"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
