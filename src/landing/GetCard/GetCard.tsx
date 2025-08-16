"use client";

import { ROUTES } from "@/libs/constants/routes";
import { useRouter } from "next/navigation";

const GetCard = () => {
  const router = useRouter();
  return (
    <div className="border-0 border-white flex flex-col h-screen justify-center">
      <div className="p-10 max-md:px-5 h-[70vh] max-md:gap-10 max-md:h-auto flex max-md:flex-col-reverse w-[80%] mx-auto relative">
        <div className="border-1 border-dashed border-[rgba(255,2552,255,0.3)] absolute top-0 left-0 h-[150px]"></div>
        <div className="border-1 border-dashed border-[rgba(255,2552,255,0.3)] absolute top-0 left-0 w-[200px] ml-1"></div>

        {/* bottom border  */}
        <div className="border-1 border-dashed border-[rgba(255,2552,255,0.3)] absolute bottom-0 right-0 h-[150px]"></div>
        <div className="border-1 border-dashed border-[rgba(255,2552,255,0.3)] absolute bottom-0 right-0 w-[500px] max-md:w-[200px] mr-1"></div>

        <div className="grow h-[60vh] max-md:h-auto flex flex-col max-md:items-start max-md:justify-center items-start justify-end">
          <h2 className="max-md:mb-0 max-md:text-left text-center font-butlerpro text-[80px] max-md:text-[48px] font-medium leading-[120%] tracking-[-3.84px] font-kerning-none font-feature-settings-liga-off">
            Get the card <br className="max-md:hidden" />
            built for you
          </h2>
          <button
            className="cursor-pointer mt-4 flex gap-2 items-center justify-center text-black bg-white py-4 px-10 rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            onClick={() => {
              localStorage.removeItem("cardForYou");
              router.push(ROUTES.CARD_FORM);
            }}
          >
            <p className="font-bold text-[16px] tarcking-[-0.03em]">
              Get my card
            </p>
            <p className="font-bold">→</p>
          </button>
        </div>
        <div className="grow h-[60vh] max-md:h-auto flex items-start justify-end">
          <img
            src="/images/card-bottom.png"
            alt="credit card"
            className="w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GetCard;
