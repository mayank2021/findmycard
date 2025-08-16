"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] flex flex-col z-40 max-md:px-6 max-md:pb-12 pb-10">
      <div className="container mx-auto flex overflow-hidden gap-2.5 items-start">
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <div className="w-full h-[1px] bg-white opacity-5 mb-7"></div>
            <div className="w-full flex items-center justify-center max-md:flex-col max-md:gap-8">
              <h3 className="text-[12px] text-[#828282] text-center">
                Copyright ©2025. All Rights Reserved
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
