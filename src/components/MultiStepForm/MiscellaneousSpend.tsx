import InputField from "./InputField";
import { FormData, FormErrors } from "./types";

interface MiscellaneousSpendProps {
  formData: Pick<
    FormData,
    | "offlineApparelFashion"
    | "departmentalStoresSupermarket"
    | "hotelsAndHolidays"
    | "fuel"
    | "utility"
    | "foreignCurrencyTransaction"
    | "otherSpends"
  >;
  errors: FormErrors;
  updateFormData: (field: string, value: string) => void;
  accuracyMode: string;
}

export default function MiscellaneousSpend({
  formData,
  errors,
  updateFormData,
}: MiscellaneousSpendProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          type="number"
          label="Offline Apparel & Fashion"
          field="offlineApparelFashion"
          placeholder="Enter spend"
          value={formData.offlineApparelFashion}
          onChange={updateFormData}
          error={errors.offlineApparelFashion}
        />
        <InputField
          type="number"
          label="Departmental Stores & Supermarket"
          field="departmentalStoresSupermarket"
          placeholder="Enter spend"
          value={formData.departmentalStoresSupermarket}
          onChange={updateFormData}
          error={errors.departmentalStoresSupermarket}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          type="number"
          label="Hotels and Holidays"
          field="hotelsAndHolidays"
          placeholder="Enter spend"
          value={formData.hotelsAndHolidays}
          onChange={updateFormData}
          error={errors.hotelsAndHolidays}
        />
        <InputField
          type="number"
          label="Fuel"
          field="fuel"
          placeholder="Enter spend"
          value={formData.fuel}
          onChange={updateFormData}
          error={errors.fuel}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          type="number"
          label="Foreign Currency Transaction"
          field="foreignCurrencyTransaction"
          placeholder="Enter spend"
          value={formData.foreignCurrencyTransaction}
          onChange={updateFormData}
          error={errors.foreignCurrencyTransaction}
        />
        <InputField
          type="number"
          label="Utility"
          field="utility"
          placeholder="Enter spend"
          value={formData.utility}
          onChange={updateFormData}
          error={errors.utility}
        />
      </div>
      <div>
        <InputField
          type="number"
          label="Other spends"
          field="otherSpends"
          placeholder="Enter spend"
          value={formData.otherSpends}
          onChange={updateFormData}
          error={errors.otherSpends}
        />
      </div>
    </div>
  );
}
