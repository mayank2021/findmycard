interface InputFieldProps {
  label: string;
  type?: string;
  field: string;
  placeholder?: string;
  value: string;
  onChange: (field: string, value: string) => void;
  error?: string;
  maxLength?: number | undefined;
}
{
  /* <div className="mb-4">
<label className="block text-sm font-medium text-gray-700 mb-2">
  {label}
</label>
<input
  type={type}
  value={value}
  onChange={(e) => onChange(field, e.target.value)}
  placeholder={placeholder}
  maxLength={maxLength}
  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
    error ? "border-red-500 bg-red-50" : "border-gray-300"
  }`}
  {...props}
/>
{error && (
  <p className="text-red-500 text-sm mt-1">{error}</p>
)}
</div> */
}
export default function InputField({
  label,
  type = "text",
  field,
  placeholder,
  value,
  onChange,
  error,
  maxLength,
  ...props
}: InputFieldProps) {
  return (
    <div>
      <div
        className={`bg-[#1A1A1A] grow py-2 px-4 border rounded-[8px] transition-colors ${
          error ? "border-red-700" : "border-[#434343]"
        }`}
      >
        <p className="text-[#C4C4C4] text-[12px] font-medium tracking-[-2%] leading-[16px]">
          {label}
        </p>
        <input
          className="text-white text-[16px] font-medium tracking-[-2%] leading-[24px] w-full focus:outline-none bg-transparent"
          type={type}
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          {...props}
        />
      </div>
      {error && <p className="text-red-700 text-[10px] mt-1">{error}</p>}
    </div>
  );
}
