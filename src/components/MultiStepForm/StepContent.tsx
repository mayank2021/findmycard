import PersonalInfoStep from "./PersonalInfoStep";
import AddressStep from "./AddressStep";
import TravelSpend from "./PaymentStep";
import ConfirmationStep from "./ConfirmationStep";
import { FormData, FormErrors } from "./types";
import DiningSpend from "./DiningSpend";
import MiscellaneousSpend from "./MiscellaneousSpend";

interface StepContentProps {
  currentStep: number;
  formData: FormData;
  errors: FormErrors;
  updateFormData: (field: string, value: string) => void;
  accuracyMode: string;
}

export default function StepContent({
  currentStep,
  formData,
  errors,
  updateFormData,
  accuracyMode,
}: StepContentProps) {
  switch (currentStep) {
    case 1:
      return (
        <PersonalInfoStep
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
        />
      );
    case 2:
      return (
        <AddressStep
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          accuracyMode={accuracyMode}
        />
      );
    case 3:
      return (
        <TravelSpend
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          accuracyMode={accuracyMode}
        />
      );
    case 4:
      return (
        <DiningSpend
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          accuracyMode={accuracyMode}
        />
      );
    case 5:
      return (
        <MiscellaneousSpend
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          accuracyMode={accuracyMode}
        />
      );
    case 6:
      return <ConfirmationStep formData={formData} />;
    default:
      return null;
  }
}
