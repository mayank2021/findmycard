"use client";
import { CardForm } from "@/landing/CardForm";
import CardForYou from "@/landing/CardForYou";
import FAQSection from "@/landing/FAQs";
import { Footer } from "@/landing/Footer";
import GetCard from "@/landing/GetCard";
import Hero from "@/landing/Hero";
import useInView from "@/libs/hooks/useInView";
import useIsMobile from "@/libs/hooks/useIsMobile";
import { useRef } from "react";

export default function Home() {
  const getCardRef = useRef<HTMLDivElement>(null);
  const cardFormRef = useRef<HTMLDivElement>(null);
  const cardForYouRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useIsMobile();

  const { isInView: isGetCardisInView } = useInView(getCardRef);
  const { isInView: isCardFormisInView } = useInView(cardFormRef);
  const { isInView: isCardForYouisInView } = useInView(cardForYouRef);

  const divider = (
    <svg
      width="964"
      height="1"
      viewBox="0 0 964 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        opacity="0.2"
        y1="0.5"
        x2="964"
        y2="0.5"
        stroke="url(#paint0_linear_5617_15403)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5617_15403"
          x1="0"
          y1="1.5"
          x2="964"
          y2="1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.490385" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="bg-[#101010] w-full">
      <Hero />
      {/* <div className=" h-[2px] mx-auto bg-white opacity-10 mb-7"></div> */}
      <div className="mx-auto flex justify-center">{divider}</div>
      <div
        ref={getCardRef}
        className={`${
          isMobile
            ? "translate-y-[0px] opacity-100"
            : isGetCardisInView
            ? "translate-y-[0px] opacity-100"
            : "translate-y-[200px] opacity-0"
        } transition-all linear duration-[1s]`}
      >
        <GetCard />
      </div>

      <div className="mx-auto flex justify-center">{divider}</div>
      <div
        ref={cardFormRef}
        className={`${
          isMobile
            ? "translate-y-[0px] opacity-100"
            : isCardFormisInView
            ? "translate-y-[0px] opacity-100"
            : "translate-y-[200px] opacity-0"
        } transition-all linear duration-[1s]`}
      >
        <CardForm />
      </div>

      <div className="mx-auto flex justify-center">{divider}</div>
      <div
        ref={cardForYouRef}
        className={`${
          isMobile
            ? "translate-y-[0px] opacity-100"
            : isCardForYouisInView
            ? "translate-y-[0px] opacity-100"
            : "translate-y-[200px] opacity-0"
        } transition-all linear duration-[1s]`}
      >
        <CardForYou />
      </div>
      {/* <FAQSection /> */}
      <Footer />
    </div>
  );
}
