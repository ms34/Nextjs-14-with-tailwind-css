import * as React from "react";

export function Component4() {
  return (
    <div className="items-start border border-[color:var(--separator,#E3E8F0)] bg-white flex max-w-[500px] flex-col p-12 rounded-md border-solid max-md:px-5">
      <div className="text-neutral-800 text-3xl font-extrabold self-stretch">
        Register
      </div>
      <div className="self-stretch text-gray-600 text-base font-medium whitespace-nowrap mt-3">
        Sign up for %ProjectName
      </div>
      <div className="justify-between items-stretch self-stretch flex gap-2 mt-5">
        <div className="justify-between items-stretch border border-[color:var(--border,#EBEBEB)] flex gap-2.5 px-14 py-3 rounded-md border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d947a66373e2fa012d364112e7407da76de4a3574d7013fc1cc2aeaf5dc0df4a?"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-gray-600 text-base font-medium self-center my-auto">
            Google
          </div>
        </div>
        <div className="justify-between items-stretch border border-[color:var(--border,#EBEBEB)] flex gap-2.5 px-14 py-3 rounded-md border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9075421976beb8e9b63b3440fc55f3e460536fbde2906f59dcd5315e5892cbea?"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-gray-600 text-base font-medium self-center my-auto">
            GitHub
          </div>
        </div>
      </div>
      <div className="items-stretch self-stretch flex gap-4 mt-9 max-md:justify-center">
        <div className="bg-slate-200 self-center w-[178px] shrink-0 h-px my-auto" />
        <div className="text-slate-500 text-center text-xs leading-3 tracking-tight">
          or
        </div>
        <div className="bg-slate-200 self-center w-[178px] shrink-0 h-px my-auto" />
      </div>
      <div className="self-stretch text-neutral-800 text-sm font-bold whitespace-nowrap mt-9">
        Full Name
      </div>
      <div className="text-slate-500 text-base font-medium leading-5 whitespace-nowrap justify-center items-stretch self-stretch border border-[color:var(--separator,#E3E8F0)] bg-white mt-1.5 px-4 py-4 rounded-md border-solid">
        Jason Smith
      </div>
      <div className="self-stretch text-neutral-800 text-sm font-bold whitespace-nowrap mt-5">
        Email
      </div>
      <div className="text-neutral-800 text-base font-medium leading-5 whitespace-nowrap justify-center items-stretch self-stretch border border-[color:var(--separator,#E3E8F0)] bg-white mt-1.5 px-4 py-4 rounded-md border-solid">
        skynick.work@gmail.com
      </div>
      <div className="text-neutral-800 text-sm font-bold self-stretch whitespace-nowrap mt-5">
        Password
      </div>
      <div className="justify-between items-stretch self-stretch border border-[color:var(--separator,#E3E8F0)] bg-white flex gap-2.5 mt-1.5 px-4 py-4 rounded-md border-solid">
        <div className="text-neutral-800 text-base font-medium leading-5 grow whitespace-nowrap">
          ••••••••••
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b8611a6982bda2f663d2423b74d0d7d226032b3de884e8fa163f2d9127f1e5?"
          className="aspect-[1.78] object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <div className="items-stretch self-stretch flex justify-between gap-2 mt-9">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd09c880681ef8683d90a6054c9c03e51e3d914387c55063ad15c3549dba747?"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-neutral-800 text-sm font-medium leading-5 self-center grow whitespace-nowrap my-auto">
          <span className="font-medium text-gray-600">I agree to the </span>
          <span className="font-semibold text-neutral-800">Privacy Policy</span>
          <span className="font-medium text-gray-600"> and </span>
          <span className="font-bold text-neutral-800">Terms of Service</span>
        </div>
      </div>
      <div className="text-white text-center text-base font-bold leading-5 whitespace-nowrap justify-center items-center self-stretch bg-black mt-9 px-16 py-4 rounded-md max-md:px-5">
        Create Account
      </div>
      <div className="text-black text-center text-base font-bold leading-5 self-center whitespace-nowrap mt-6">
        <span className="font-medium text-gray-600">
          Have an account already?{" "}
        </span>
        <span className="font-bold text-gray-600"> </span>
        <span className="font-bold text-black">Log In</span>
      </div>
    </div>
  );
}


