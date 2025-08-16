import { ChevronRight, ChevronLeft, Check } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

export default function NavigationButtons({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSubmit,
}: NavigationButtonsProps) {
  if (currentStep >= totalSteps) return null;

  return (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          currentStep === 1
            ? "border bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.4)] font-light cursor-not-allowed"
            : "border flex items-center px-6 py-3 rounded-lg  bg-[rgba(255,255,255,1)] border-[rgba(255,255,255,0.4)] text-[#111] cursor-pointer"
        }`}
      >
        <ChevronLeft size={20} className="mr-2" />
        Previous
      </button>

      {currentStep < totalSteps - 1 ? (
        <button
          type="button"
          onClick={onNext}
          className="border flex items-center px-6 py-3 rounded-lg  bg-[rgba(255,255,255,1)] border-[rgba(255,255,255,0.4)] text-[#111] cursor-pointer"
        >
          Next
          <ChevronRight size={20} className="ml-2" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center px-6 py-3 bg-[#2B7A51] text-white rounded-lg font-medium cursor-pointer hover:shadow-md transition-all duration-200"
        >
          Submit
          <Check size={20} className="ml-2" />
        </button>
      )}
    </div>
  );
}
