import InputField from "./InputField";
import { FormData, FormErrors } from "./types";

interface PersonalInfoStepProps {
  formData: Pick<FormData, "fullName" | "email" | "phone" | "monthlySpend">;
  errors: FormErrors;
  updateFormData: (field: string, value: string) => void;
}

export default function PersonalInfoStep({
  formData,
  errors,
  updateFormData,
}: PersonalInfoStepProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Full Name"
          field="fullName"
          placeholder="Enter your name"
          value={formData.fullName}
          onChange={updateFormData}
          error={errors.fullName}
        />
        <InputField
          label="Avg. monthly spend"
          type="number"
          field="monthlySpend"
          placeholder="Enter your monthly spend"
          value={formData.monthlySpend}
          onChange={updateFormData}
          error={errors.monthlySpend}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Email Address"
          type="email"
          field="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={updateFormData}
          error={errors.email}
        />
        <InputField
          label="Phone Number"
          type="number"
          field="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={updateFormData}
          error={errors.phone}
        />
      </div>
    </div>
  );
}
