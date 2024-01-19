import * as React from "react";

export function Component3() {
  return (
    <div className="bg-gray-50">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.67] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="items-start border border-[color:var(--separator,#E3E8F0)] bg-white flex flex-col w-full my-auto px-16 py-12 rounded-md border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="text-neutral-800 text-3xl font-extrabold self-stretch max-md:max-w-full">
              Register
            </div>
            <div className="self-stretch text-gray-600 text-base font-medium mt-3 max-md:max-w-full">
              Sign up for %ProjectName
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-2 mt-5 max-md:max-w-full max-md:flex-wrap">
              <div className="justify-between items-stretch border border-[color:var(--border,#EBEBEB)] flex gap-2.5 px-20 py-3 rounded-md border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d947a66373e2fa012d364112e7407da76de4a3574d7013fc1cc2aeaf5dc0df4a?"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-600 text-base font-medium self-center grow whitespace-nowrap my-auto">
                  Google
                </div>
              </div>
              <div className="justify-between items-stretch border border-[color:var(--border,#EBEBEB)] flex gap-2.5 px-20 py-3 rounded-md border-solid max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9075421976beb8e9b63b3440fc55f3e460536fbde2906f59dcd5315e5892cbea?"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-600 text-base font-medium self-center grow whitespace-nowrap my-auto">
                  GitHub
                </div>
              </div>
            </div>
            <div className="items-stretch self-stretch flex gap-4 mt-9 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="bg-slate-200 self-center w-[244px] shrink-0 h-px my-auto" />
              <div className="text-slate-500 text-center text-xs leading-3 tracking-tight">
                or
              </div>
              <div className="bg-slate-200 self-center w-[244px] shrink-0 h-px my-auto" />
            </div>
            <div className="self-stretch text-neutral-800 text-sm font-bold mt-9 max-md:max-w-full">
              Full Name
            </div>
            <div className="text-slate-500 text-base font-medium leading-5 justify-center items-stretch self-stretch border border-[color:var(--separator,#E3E8F0)] bg-white mt-1.5 px-4 py-4 rounded-md border-solid max-md:max-w-full">
              Jason Smith
            </div>
            <div className="self-stretch text-neutral-800 text-sm font-bold mt-5 max-md:max-w-full">
              Email
            </div>
            <div className="text-neutral-800 text-base font-medium leading-5 justify-center items-stretch self-stretch border border-[color:var(--separator,#E3E8F0)] bg-white mt-1.5 px-4 py-4 rounded-md border-solid max-md:max-w-full">
              skynick.work@gmail.com
            </div>
            <div className="text-neutral-800 text-sm font-bold self-stretch mt-5 max-md:max-w-full">
              Password
            </div>
            <div className="justify-between items-stretch self-stretch border border-[color:var(--separator,#E3E8F0)] bg-white flex gap-2.5 mt-1.5 pl-5 pr-7 py-4 rounded-md border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="text-neutral-800 text-base font-medium leading-5 grow shrink basis-auto max-md:max-w-full">
                ••••••••••
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b8611a6982bda2f663d2423b74d0d7d226032b3de884e8fa163f2d9127f1e5?"
                className="aspect-[1.78] object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="items-stretch self-stretch flex justify-between gap-2 mt-9 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd09c880681ef8683d90a6054c9c03e51e3d914387c55063ad15c3549dba747?"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-800 text-sm font-medium leading-5 self-center grow shrink basis-auto my-auto max-md:max-w-full">
                <span className="font-medium text-gray-600">
                  I agree to the{" "}
                </span>
                <span className="font-semibold text-neutral-800">
                  Privacy Policy
                </span>
                <span className="font-medium text-gray-600"> and </span>
                <span className="font-bold text-neutral-800">
                  Terms of Service
                </span>
              </div>
            </div>
            <div className="text-white text-center text-base font-bold leading-5 max-w-[271px] justify-center items-center self-stretch bg-black mt-9 px-16 py-4 rounded-md max-md:max-w-full max-md:px-5">
              Create Account
            </div>
            <div className="text-black text-center text-base font-bold leading-5 max-w-[405px] self-center mt-6">
              <span className="font-medium text-gray-600">
                Have an account already?{" "}
              </span>
              <span className="font-bold text-gray-600"> </span>
              <span className="font-bold text-black">Log In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


