import { ChangeEvent, FormEvent, useState } from "react";
import { ErrorsField, FormFields, FormProps } from "../interfaces/interface";

const useForm = ({ initialState }: FormProps) => {
  const [form, setForm] = useState<FormFields>({ ...initialState });
  const [errors, setErrors] = useState<ErrorsField>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorsField = {};

    if (form.first_name.trim() === "") {
      newErrors.first_name = "First Name cannot be empty";
    }

    if (form.last_name.trim() === "") {
      newErrors.last_name = "Last Name cannot be empty";
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email cannot be empty";
    }

    if (form.password.trim() === "") {
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log(form);
  };

  return { errors, handleChange, handleSubmit };
};

export default useForm;
