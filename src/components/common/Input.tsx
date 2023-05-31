import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type InputProps = {
  styles: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  styles,
  required,
  placeholder,
  handleChange,
  error,
}) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        className={styles}
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default Input;
