"use client";

import { ROUTES } from "@/libs/constants/routes";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col max-md:px-0 items-center justify-center pt-[162px] max-md:pt-[100px] max-md:pb-[0px] relative z-10">
      <div className="max-w-[984px] mx-auto text-center">
        <h1 className="text-[#FFF] text-center font-butlerpro text-[80px] font-medium leading-[110%] tracking-[-6px] max-md:text-[56px] max-md:tracking-[-0.4px]">
          Find your perfect <br className="max-md:hidden" />
          <span className="max-md:hidden">credit</span> card
        </h1>
        <p className="text-white opacity-70 text-center font-satoshi max-md:-mt-1 text-[20px] max-md:text-[16px] font-normal leading-[150%] tracking-[-2%] max-md:tracking-[-0.48px] [font-feature-settings:'ss03_on']">
          Get personalized card recommendations{" "}
          <br className="hidden max-md:block" />
          based on your spending. <br className="max-md:hidden" />
          <span className="max-md:hidden">
            Discover the best rewards, cashback, and benefits for you.
          </span>
        </p>
      </div>
      <button
        className="cursor-pointer mt-8 flex gap-2 items-center justify-center text-black bg-white py-4 px-10 rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
        onClick={() => {
          localStorage.removeItem("cardForYou");
          router.push(ROUTES.CARD_FORM);
        }}
      >
        <p className="font-bold text-[16px] tarcking-[-0.03em]">Find my card</p>
        <p className="font-bold">→</p>
      </button>
      <div className="relative overflow-hidden w-full flex justify-center items-center">
        <img
          src={"/images/card.png"}
          className="w-[400px] relative z-10 my-10 max-md:w-[300px]"
        />
        <div
          className="w-[1600px] max-md:w-[1500px] max-md:h-[1500px] max-md:top-[50px] absolute h-[1600px] top-[200px] transform -translate-x-1/2 left-[50%] rounded-full"
          style={{
            background:
              "linear-gradient(1800deg,rgba(118, 41, 243, 1) 0%, rgba(16, 16, 16, 1) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
