import { Check } from "lucide-react";
import { FormData } from "./types";

interface ConfirmationStepProps {
  formData: Pick<FormData, "fullName" | "email" | "phone">;
}

export default function ConfirmationStep({ formData }: ConfirmationStepProps) {
  return (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        <Check size={40} className="text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Your form has been successfully submitted.
        </p>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 text-left space-y-2">
        <h4 className="font-semibold text-gray-900">Summary:</h4>
        <p className="text-sm text-gray-600">Name: {formData.fullName}</p>
        <p className="text-sm text-gray-600">Email: {formData.email}</p>
        <p className="text-sm text-gray-600">Phone: {formData.phone}</p>
        <p className="text-sm text-gray-600"></p>
      </div>
    </div>
  );
}
