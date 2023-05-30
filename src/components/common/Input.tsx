import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  styles: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  styles,
  required,
  placeholder,
}) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        className={styles}
      />
    </>
  );
};

export default Input;
