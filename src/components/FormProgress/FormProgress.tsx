"use client";
import { useFormData } from "../../hooks";

export const FormProgress = () => {
  const { currentStep, getFormCompletion, isStepComplete } = useFormData();

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Form Progress</h3>
        <span className="text-white/70 text-sm">
          {getFormCompletion()}% Complete
        </span>
      </div>
      
      <div className="w-full bg-white/20 rounded-full h-2">
        <div 
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${getFormCompletion()}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-white/60">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div 
              className={`w-3 h-3 rounded-full mb-1 ${
                step < currentStep 
                  ? 'bg-green-500' 
                  : step === currentStep 
                    ? 'bg-blue-500' 
                    : 'bg-white/30'
              }`}
            />
            <span className={step === currentStep ? 'text-blue-400' : ''}>
              Step {step}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 text-xs text-white/70">
        Current Step: {currentStep}
        {isStepComplete(currentStep) && (
          <span className="text-green-400 ml-2">✓ Complete</span>
        )}
      </div>
    </div>
  );
};
