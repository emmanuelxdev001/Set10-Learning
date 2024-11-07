function MainScreen() {
  return (
    <div className="text-neutral-950 -mb-10">
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[40px] md:text-[50px] lg:text-[80px]  text-neutral-950 font-extrabold mx-auto leading-[1] mb-2">
              Data2Bots Visualization
            </h2>
            <p className=" text-[15px] md:text-[20px] leading-5 max-w-2xl mb-1 mx-auto text-neutral-900 ">
              Data Speaks Volumn, understand what's hidden behind Nigeria's.
            </p>
            <p className=" text-[15px] md:text-[20px] ">
              Know what data is saying about your dear, Country!
            </p>

            <div className="flex justify-center items-center gap-x-4 text-sm mt-10">
              <div className="flex text-[28px]">{"🐹".repeat(5)}</div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[108px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </div>
  );
}
export default MainScreen;
