interface InputProps {
  fieldName: string;
  labelText: string;
  type: string;
  placeholder: string;
  name: string;
  value?: string;
}

const InputField = ({
  fieldName,
  placeholder,
  type,
  labelText,
  name,
  value,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={fieldName}>{labelText}</label>
      <input
        value={value}
        name={name}
        required
        type={type}
        className="border-2 border-black rounded-md px-4 "
        id={fieldName}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
