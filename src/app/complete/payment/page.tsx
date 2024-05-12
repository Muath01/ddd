import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function paymentPage() {
  return (
    <div className="h-screen w-full">
      <div className=" flex flex-col">
        {/* <!-- Heading   --> */}
        <div className="mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8 select-none  w-full bg-black  ">
          <h2 className="text-3xl font-extrabold text-black sm:text-5xl sm:leading-t igh sm:tracking-tight  ">
            Pricing plans
          </h2>

          <p className="mt-3 max-w-3xl text-lg text-slate-500 ">
            Choose a plan that meets your requirements
          </p>
        </div>

        {/* <!-- Pricing Plans   --> */}
        <div className="relative select-none bg-bl bottom-20 ">
          {/* <!-- Plans --> */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8  border-">
            <div className="flex flex-col relative border border-slate-200 shadow-lg p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold leading-5 ">Basic</h3>
              <p className="mt-4 text-slate-700 leading-6 ">
                Our most basic plan
              </p>
              <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                <p className="flex items-center text-sm font-semibold  text-slate-500">
                  <span>USD</span>
                  <span className="ml-3 text-4xl text-slate-900 ">$10</span>
                  <span className="ml-1.5 mt-1">One time Payment</span>
                </p>
              </div>
              <ul className="flex-1 mt-6 space-y-4">
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                    {">"}
                  </div>
                  <span className="ml-3">IQ score</span>
                </li>
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                    {">"}
                  </div>
                  <span className="ml-3">Visual Chart</span>
                </li>
              </ul>
              <a
                href="#"
                //   onClick={() =>
                //     setStatus((prevStatus) => ({
                //       ...prevStatus,
                //       showItem: true,
                //       amount: 1000,
                //       productId: "price_1Oni9IGFwRQBDdF4vKE7ZJxm",
                //     }))
                //   }
                className="block text-cyan-700 bg-cyan-50 hover:bg-cyan-100 mt-8 px-6 py-4 text-sm font-semibold leading-4  text-center rounded-lg shadow-md no-underline rounded-md "
              >
                Select Plan
              </a>
            </div>
            <div className="flex flex-col relative border border-slate-200 shadow-lg p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold leading-5 ">Professional</h3>
              <p className="absolute top-0 -translate-y-1/2  bg-cyan-500 text-white px-3 py-0.5 text-sm  text-semibold tracking-wide rounded-full shadow-md">
                Most Popular
              </p>
              <p className="mt-4 text-slate-700 leading-6 ">
                Our most popular plan with lots of features
              </p>
              <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                <p className="flex items-center text-sm font-semibold text-slate-500">
                  <span>USD</span>
                  <span className="ml-3 text-4xl text-slate-900">$15</span>
                  <span className="ml-1.5 mt-1">One time Payment</span>
                </p>
              </div>
              <ul className="flex-1 mt-6 space-y-4">
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                    {">"}
                  </div>
                  <span className="ml-3">IQ score</span>
                </li>
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                  </div>
                  <span className="ml-3">Visual Chart</span>
                </li>
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                  </div>
                  <span className="ml-3">Printable</span>
                </li>
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                  </div>
                  <span className="ml-3">JPEG & PNG version of chart</span>
                </li>
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                  </div>
                  <span className="ml-3">PDF Document of hcart</span>
                </li>
              </ul>
              <a
                href="#"
                // onClick={() =>
                //   setStatus((prevStatus) => ({
                //     ...prevStatus,
                //     showItem: true,
                //     amount: 1500,
                //     productId: "price_1OniAbGFwRQBDdF49iRGP97Z",
                //   }))
                // }
                className="block text-white bg-cyan-500 hover:bg-cyan-600 mt-8 px-6 py-4 text-sm font-semibold leading-4  text-center rounded-lg shadow-md no-underline"
              >
                Select Plan
              </a>
            </div>
            <div className="flex flex-col relative border border-slate-200 shadow-lg p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-semibold leading-5 ">Enterprise</h3>
              <p className="mt-4 text-slate-700 leading-6 ">
                Built for job applications
              </p>
              <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                <p className="flex items-center text-sm font-semibold text-slate-500">
                  <span>USD</span>
                  <span className="ml-3 text-4xl text-slate-900">$30</span>
                  <span className="ml-1.5 mt-1">One time Payment</span>
                </p>
              </div>
              <ul className="flex-1 mt-6 space-y-4">
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                  </div>
                  <span className="ml-3">Qtink Certificate</span>
                </li>
                <li className="flex text-sm text-slate-700 leading-0 ">
                  <div className="text-cyan-500 text-[24px] relative bottom-0">
                    {/* <AiOutlineArrowRight /> */}
                  </div>
                  <span className="ml-3">
                    All the features listed in the Basic and Professional tiers
                  </span>
                </li>
              </ul>
              <a
                href="#"
                // onClick={() =>
                //   setStatus((prevStatus) => ({
                //     ...prevStatus,
                //     showItem: true,
                //     amount: 3000,
                //     productId: "price_1OniBVGFwRQBDdF4011zDU9Z",
                //   }))
                // }
                className="block text-cyan-700 bg-cyan-50 hover:bg-cyan-100 mt-8 px-6 py-4 text-sm font-semibold leading-4  text-center rounded-lg shadow-md no-underline"
              >
                Select Plan
              </a>
            </div>
          </div>
          {/* <!-- /Plans     --> */}
        </div>
      </div>
    </div>
  );
}

export default paymentPage;
