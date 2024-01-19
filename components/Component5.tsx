import React from "react";

export function Component5() {
  return (
    <form className="items-stretch self-stretch flex max-w-[400px] flex-col">
      <header className="text-neutral-800 text-3xl font-extrabold w-full">
        Register
      </header>
      <div className="text-gray-600 text-base font-medium w-full mt-3">
        Sign up for %ProjectName
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-5">
        <button className="justify-between items-stretch border border-[color:var(--border,#EBEBEB)] flex gap-2.5 px-14 py-3 rounded-md border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d947a66373e2fa012d364112e7407da76de4a3574d7013fc1cc2aeaf5dc0df4a?apiKey=7c95bfd758a54735b5e4cdcd3fd2a039&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            alt="Google"
          />
          <div className="text-gray-600 text-base font-medium self-center my-auto">
            Google
          </div>
        </button>
        <button className="justify-between items-stretch border border-[color:var(--border,#EBEBEB)] flex gap-2.5 px-14 py-3 rounded-md border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9075421976beb8e9b63b3440fc55f3e460536fbde2906f59dcd5315e5892cbea?apiKey=7c95bfd758a54735b5e4cdcd3fd2a039&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            alt="GitHub"
          />
          <div className="text-gray-600 text-base font-medium self-center my-auto">
            GitHub
          </div>
        </button>
      </div>
      <header className="text-neutral-800 text-sm font-bold w-full">
        Full Name
      </header>
      <div className="text-slate-500 text-base font-medium leading-5 whitespace-nowrap justify-center items-stretch border border-[color:var(--separator,#E3E8F0)] bg-white mt-1.5 px-4 py-4 rounded-md border-solid">
        Jason Smith
      </div>
      <header className="text-neutral-800 text-sm font-bold w-full mt-5">
        Email
      </header>
      <div className="text-neutral-800 text-base font-medium leading-5 whitespace-nowrap justify-center items-stretch border border-[color:var(--separator,#E3E8F0)] bg-white mt-1.5 px-4 py-4 rounded-md border-solid">
        skynick.work@gmail.com
      </div>
      <header className="text-neutral-800 text-sm font-bold w-full mt-5">
        Password
      </header>
      <input type="password" className="justify-between items-stretch border border-[color:var(--separator,#E3E8F0)] bg-white flex gap-2.5 mt-1.5 px-4 py-4 rounded-md border-solid"/>
      <div className="justify-between items-stretch border border-[color:var(--separator,#E3E8F0)] bg-white flex gap-2.5 mt-1.5 px-4 py-4 rounded-md border-solid">
        <div aria-label="Password" className="text-neutral-800 text-base font-medium leading-5 grow whitespace-nowrap">
          ••••••••••
        </div>
        <img
          loading="lazy"
          alt="Password"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b8611a6982bda2f663d2423b74d0d7d226032b3de884e8fa163f2d9127f1e5?apiKey=7c95bfd758a54735b5e4cdcd3fd2a039&"
          className="aspect-[1.78] object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
    </form>
  );
}
