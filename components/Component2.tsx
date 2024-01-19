import * as React from "react";

export function Component2() {
  return (
    <div className="bg-slate-900 bg-opacity-90 flex flex-col justify-center items-stretch">
      <div className="flex-col overflow-hidden relative flex min-h-[1200px] w-full justify-center items-stretch max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/612441420868ae54c0ea4ccfa5cd5e1a884463514bf42b990a47aa6f573d0ab6?"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative bg-black flex w-full flex-col pt-12 px-20 items-start max-md:max-w-full max-md:px-5">
          <div className="text-lime-400 text-5xl font-medium leading-[85px] tracking-tighter w-[559px] max-w-[1011px] mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[76px]">
            Step 1
          </div>
          <div className="text-white text-7xl leading-[85px] tracking-tighter max-w-[1011px] mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            Run the plugin
          </div>
          <div className="items-stretch self-center flex ml-0 justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-4xl font-semibold leading-[60px] whitespace-nowrap justify-center items-center bg-stone-900 aspect-square h-[70px] px-7 rounded-[99px] border-2 border-solid border-violet-400 max-md:px-5">
              1
            </div>
            <div className="text-white text-4xl leading-[60px] self-center grow whitespace-nowrap my-auto max-md:max-w-full">
              Search for “Builder.io”
            </div>
          </div>
          <div className="items-stretch self-center flex ml-0 justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-4xl font-semibold leading-[60px] whitespace-nowrap justify-center items-center bg-stone-900 aspect-square h-[70px] px-6 rounded-[99px] border-2 border-solid border-violet-400 max-md:px-5">
              2
            </div>
            <div className="text-white text-4xl leading-[60px] self-center grow whitespace-nowrap my-auto max-md:max-w-full">
              Click ‘Run’
            </div>
          </div>
          <div className="text-white text-4xl font-medium leading-10 underline whitespace-nowrap items-center bg-violet-400 w-[495px] max-w-full justify-center mt-14 px-16 py-10 rounded-xl max-md:mt-10 max-md:px-5">
            <a
              href="https://www.figma.com/community/plugin/747985167520967365/builder-io-ai-powered-figma-to-code-react-vue-tailwind-more"
              target="_blank"
            >
              Install the plugin
            </a>
          </div>
          <div className="self-center w-full max-w-[939px] mt-9 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col mt-28 items-end max-md:max-w-full max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f387ead1341d9981e15ce684f0a200456231b3a69ddfbef06c491a5b5f3f0cd?"
                    className="aspect-[1.31] object-contain object-center w-[55px] stroke-[5px] stroke-lime-400 overflow-hidden max-w-full"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.35] object-contain object-center w-[494px] overflow-hidden max-w-full mt-4 rounded self-start"
                  />
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[0.71] object-contain object-center w-full shadow-sm overflow-hidden grow max-md:mt-6"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


