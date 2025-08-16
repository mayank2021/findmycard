import InputField from "./InputField";
import { FormData, FormErrors } from "./types";

interface TravelSpendProps {
  formData: Pick<
    FormData,
    | "travelSpend"
    | "makeMyTrip"
    | "irctc"
    | "vistara"
    | "airIndia"
    | "indigo"
    | "easeMyTrip"
    | "offlineTravelSpend"
    | "ola"
    | "uber"
  >;
  errors: FormErrors;
  updateFormData: (field: string, value: string) => void;
  accuracyMode: string;
}

export default function TravelSpend({
  formData,
  errors,
  updateFormData,
  accuracyMode,
}: TravelSpendProps) {
  return (
    <div className="space-y-4">
      {accuracyMode === "off" ? (
        <InputField
          type="number"
          label="Travel spend"
          field="travelSpend"
          placeholder="Enter your total travel spend"
          value={formData.travelSpend}
          onChange={updateFormData}
          error={errors.travelSpend}
        />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="MakeMy Trip"
              field="makeMyTrip"
              placeholder="Enter MakeMy Trip spend"
              value={formData.makeMyTrip}
              onChange={updateFormData}
              error={errors.makeMyTrip}
            />
            <InputField
              type="number"
              label="IRCTC"
              field="irctc"
              placeholder="Enter IRCTC spend"
              value={formData.irctc}
              onChange={updateFormData}
              error={errors.irctc}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="Vistara"
              field="vistara"
              placeholder="Enter Vistara spend"
              value={formData.vistara}
              onChange={updateFormData}
              error={errors.vistara}
            />
            <InputField
              type="number"
              label="Air India"
              field="airIndia"
              placeholder="Enter Air India spend"
              value={formData.airIndia}
              onChange={updateFormData}
              error={errors.airIndia}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="Indigo"
              field="indigo"
              placeholder="Enter Indigo spend"
              value={formData.indigo}
              onChange={updateFormData}
              error={errors.indigo}
            />
            <InputField
              type="number"
              label="Ease My Trip"
              field="easeMyTrip"
              placeholder="Enter Ease My Trip spend"
              value={formData.easeMyTrip}
              onChange={updateFormData}
              error={errors.easeMyTrip}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="number"
              label="Ola"
              field="ola"
              placeholder="Enter Ola spend"
              value={formData.ola}
              onChange={updateFormData}
              error={errors.ola}
            />
            <InputField
              type="number"
              label="Uber"
              field="uber"
              placeholder="Enter Uber spend"
              value={formData.uber}
              onChange={updateFormData}
              error={errors.uber}
            />
          </div>
          <div>
            <InputField
              type="number"
              label="Offline travel spend"
              field="offlineTravelSpend"
              placeholder="Enter offline travel spend"
              value={formData.offlineTravelSpend}
              onChange={updateFormData}
              error={errors.offlineTravelSpend}
            />
          </div>
        </>
      )}
    </div>
  );
}
