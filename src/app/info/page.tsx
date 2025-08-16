import { MultiStepForm } from "@/components/MultiStepForm";
import { cards } from "@/libs/constants";
import { calculateTotal } from "@/libs/logic/logic";
import React from "react";

const spend = {
  ecommerseSpend: "",
  amazon: "1000",
  flipkart: "1000",
  tataNeu: "1000",
  myntra: "1000",
  bigBasket: "1000",
  blinkIt: "1000",
  ecommerseOthers: "10000",
  travelSpend: "",
  makeMyTrip: "1000",
  irctc: "1000",
  vistara: "1000",
  airIndia: "1000",
  indigo: "1000",
  easeMyTrip: "1000",
  ola: "1000",
  uber: "1000",
  offlineTravelSpend: "1000",
  diningSpend: "",
  zomato: "1000",
  swiggy: "1000",
  eazyDiner: "1000",
  luxurySpend: "1000",
  offlineApparelFashion: "1000",
  departmentalStoresSupermarket: "1000",
  hotelsAndHolidays: "1000",
  movieSpend: "",
  pvr: "1000",
  bookMyShow: "1000",
  fuel: "1000",
  utility: "1000",
  foreignCurrencyTransaction: "1000",
  otherSpends: "1000",
};

const page = () => {
  const cardsData = cards?.map((ele) => calculateTotal(ele, spend));
  console.log(cardsData, "jcbfhbvfjvnfnvjfnvkn");
  return (
    <div className="relative h-screen px-10 items-center justify-center gap-8 pb-[200px] lg:gap-16 font-sans">
      <div className="aboslute top-0">
        <div className="relative h-[300px] overflow-hidden w-full flex justify-center items-center">
          <div
            className="w-[1600px] absolute h-[1600px] bottom-[00px] transform -translate-x-1/2 left-[50%] rounded-full"
            style={{
              background:
                "linear-gradient(180deg,rgba(118, 41, 243, 1) 0%, rgba(16, 16, 16, 1) 100%)",
            }}
          ></div>
        </div>
      </div>
      <div className="max-w-[984px] mx-auto text-center -mt-[200px] ">
        <h1 className="text-[#FFF] text-center font-butlerpro relative !z-[20] text-[80px] font-medium leading-[110%] tracking-[-6px] max-md:text-[56px] max-md:tracking-[-4%]">
          Find Your Perfect <br />
          Credit Card
        </h1>
        <p className="text-white opacity-70 text-center font-satoshi max-md:mt-1 text-[20px] font-normal leading-[150%] tracking-[-2%] max-md:tracking-[-0.48px] [font-feature-settings:'ss03_on']">
          Get personalized card recommendations
        </p>
      </div>
      <MultiStepForm />
    </div>
  );
};

export default page;
