import { STEP_CONFIGS } from "./constants";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      {STEP_CONFIGS.map((stepConfig, index) => {
        const Icon = stepConfig.icon;
        const isActive = stepConfig.step === currentStep;
        const isCompleted = stepConfig.step < currentStep;
        const isLast = index === STEP_CONFIGS.length - 1;

        return (
          <div key={stepConfig.step} className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "bg-white border-[1px] border-white !text-[#000]"
                  : isCompleted
                  ? "bg-[#2B7A51] border-[#2B7A51] text-white"
                  : "border-[1px] border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.4)]"
              }`}
            >
              <Icon size={20} />
            </div>
            {!isLast && (
              <div
                className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                  isCompleted ? "bg-[#2B7A51]" : "bg-[rgba(255,255,255,0.4)]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
