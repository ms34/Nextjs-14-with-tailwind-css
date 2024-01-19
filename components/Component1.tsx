
export function Component1() {
  return (
    <div className="w-[1440px] h-[900px] pr-[170px] bg-neutral-50 justify-start items-center gap-[170px] inline-flex">
    <div className="w-[600px] h-[900px] relative">
      <img className="w-[600px] h-[900px] left-0 top-0 absolute" src="https://via.placeholder.com/600x900" />
      <div className="w-[54px] h-[41px] left-[273px] top-[429px] absolute" />
    </div>
    <div className="w-[500px] self-stretch p-[50px] bg-white rounded-[5px] border border-slate-200 flex-col justify-start items-start gap-9 inline-flex">
      <div className="self-stretch h-[76px] flex-col justify-center items-start gap-3 flex">
        <div className="text-neutral-800 text-[32px] font-extrabold font-['Manrope']">Log In</div>
        <div className="self-stretch text-gray-600 text-base font-medium font-['Overpass']">Continue your journey with %ProjectName</div>
      </div>
      <div className="self-stretch h-[156px] flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1.5 flex">
          <div className="self-stretch text-neutral-800 text-sm font-bold font-['Overpass']">Email</div>
          <div className="self-stretch px-4 pt-4 pb-[17px] bg-white rounded-[5px] border border-slate-200 justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-slate-500 text-base font-medium font-['Overpass'] leading-tight">example@example.com</div>
          </div>
        </div>
        <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1.5 flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 text-neutral-800 text-sm font-bold font-['Overpass']">Password</div>
            <div className="grow shrink basis-0 text-right text-slate-500 text-sm font-bold font-['Overpass']">Forgot password?</div>
          </div>
          <div className="self-stretch px-4 pt-4 pb-[17px] bg-white rounded-[5px] border border-slate-200 justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-slate-500 text-base font-medium font-['Overpass'] leading-tight">Enter your password</div>
            <div className="w-4 h-[9px] justify-center items-center flex">
              <div className="w-4 h-[16.36px] relative flex-col justify-start items-start flex" />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-5 h-5 relative">
          <div className="w-5 h-5 left-0 top-0 absolute rounded border border-slate-500" />
        </div>
        <div className="text-gray-600 text-sm font-medium font-['Overpass'] leading-tight">Remember me</div>
      </div>
      <div className="self-stretch h-[79px] flex-col justify-start items-center gap-6 flex">
        <div className="self-stretch px-4 pt-4 pb-[17px] bg-black rounded-[5px] justify-center items-center gap-2 inline-flex">
          <div className="text-center text-white text-base font-bold font-['Overpass'] leading-tight">Log In</div>
        </div>
        <div className="text-center"><span className="text-gray-600 text-base font-medium font-['Overpass'] leading-tight">Don’t have a %ProjectName account?</span><span className="text-gray-600 text-base font-bold font-['Overpass'] leading-tight"> </span><span className="text-black text-base font-bold font-['Overpass'] leading-tight">Register Now</span></div>
      </div>
    </div>
  </div>
  );
}
