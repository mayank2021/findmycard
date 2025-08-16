import InputField from "./InputField";
import { FormData, FormErrors } from "./types";

interface DiningSpendProps {
  formData: Pick<
    FormData,
    | "diningSpend"
    | "movieSpend"
    | "zomato"
    | "swiggy"
    | "eazyDiner"
    | "luxurySpend"
    | "bookMyShow"
    | "pvr"
  >;
  errors: FormErrors;
  updateFormData: (field: string, value: string) => void;
  accuracyMode: string;
}

export default function DiningSpend({
  formData,
  errors,
  updateFormData,
  accuracyMode,
}: DiningSpendProps) {
  return (
    <div className="space-y-4">
      {accuracyMode === "off" ? (
        <div className="flex flex-col gap-4">
          <InputField
            type="number"
            label="Dining spend"
            field="diningSpend"
            placeholder="Enter your total dining spend"
            value={formData.diningSpend}
            onChange={updateFormData}
            error={errors.diningSpend}
          />
          <InputField
            type="number"
            label="Movie spend"
            field="movieSpend"
            placeholder="Enter your total movie spend"
            value={formData.movieSpend}
            onChange={updateFormData}
            error={errors.movieSpend}
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="Zomato"
              field="zomato"
              placeholder="Enter Zomato spend"
              value={formData.zomato}
              onChange={updateFormData}
              error={errors.zomato}
            />
            <InputField
              type="number"
              label="Swiggy"
              field="swiggy"
              placeholder="Enter Swiggy spend"
              value={formData.swiggy}
              onChange={updateFormData}
              error={errors.swiggy}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="EazyDiner"
              field="eazyDiner"
              placeholder="Enter EazyDiner spend"
              value={formData.eazyDiner}
              onChange={updateFormData}
              error={errors.eazyDiner}
            />
            <InputField
              type="number"
              label="Luxury Spend - Taj/Oberoi"
              field="luxurySpend"
              placeholder="Enter Taj/Oberoi dining spend"
              value={formData.luxurySpend}
              onChange={updateFormData}
              error={errors.luxurySpend}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="PVR"
              field="pvr"
              placeholder="Enter pvr spend"
              value={formData.pvr}
              onChange={updateFormData}
              error={errors.pvr}
            />
            <InputField
              type="number"
              label="Book my Show"
              field="bookMyShow"
              placeholder="Enter book my show spend"
              value={formData.bookMyShow}
              onChange={updateFormData}
              error={errors.bookMyShow}
            />
          </div>
        </>
      )}
    </div>
  );
}
