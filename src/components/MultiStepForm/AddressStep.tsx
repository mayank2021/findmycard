import InputField from "./InputField";
import { FormData, FormErrors } from "./types";

interface AddressStepProps {
  formData: Pick<
    FormData,
    | "ecommerseSpend"
    | "amazon"
    | "flipkart"
    | "tataNeu"
    | "myntra"
    | "bigBasket"
    | "blinkIt"
    | "ecommerseOthers"
  >;
  errors: FormErrors;
  updateFormData: (field: string, value: string) => void;
  accuracyMode: string;
}

export default function AddressStep({
  formData,
  errors,
  updateFormData,
  accuracyMode,
}: AddressStepProps) {
  return (
    <div className="space-y-4">
      {accuracyMode === "off" ? (
        <InputField
          label="Ecommerce spend"
          field="ecommerseSpend"
          type="number"
          placeholder="Enter your ecommerse spend"
          value={formData.ecommerseSpend}
          onChange={updateFormData}
          error={errors.ecommerseSpend}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="Amazon"
              field="amazon"
              placeholder="Enter Amazon spend"
              value={formData.amazon}
              onChange={updateFormData}
              error={errors.amazon}
            />
            <InputField
              type="number"
              label="Flipkart"
              field="flipkart"
              placeholder="Enter Flipkart spend"
              value={formData.flipkart}
              onChange={updateFormData}
              error={errors.flipkart}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="Tata Neu"
              field="tataNeu"
              placeholder="Enter Tata Neu spend"
              value={formData.tataNeu}
              onChange={updateFormData}
              error={errors.tataNeu}
            />
            <InputField
              type="number"
              label="Myntra"
              field="myntra"
              placeholder="Enter Myntra spend"
              value={formData.myntra}
              onChange={updateFormData}
              error={errors.myntra}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="Big Basket"
              field="bigBasket"
              placeholder="Enter Big Basket spend"
              value={formData.bigBasket}
              onChange={updateFormData}
              error={errors.bigBasket}
            />
            <InputField
              type="number"
              label="Blink It"
              field="blinkIt"
              placeholder="Enter Blink It spend"
              value={formData.blinkIt}
              onChange={updateFormData}
              error={errors.blinkIt}
            />
          </div>
          <div>
            <InputField
              type="number"
              label="Others"
              field="ecommerseOthers"
              placeholder="Enter other ecommerce spend"
              value={formData.ecommerseOthers}
              onChange={updateFormData}
              error={errors.ecommerseOthers}
            />
          </div>
        </>
      )}
    </div>
  );
}
