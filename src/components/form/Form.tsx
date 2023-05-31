import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { FormFields } from "../iinterfaces/interface";

const Form = () => {
  const [form, setForm] = useState<FormFields | object>({});
  const [error, setError] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (!value) {
      setError(`${name} cannot be empty`);
    } else {
      setError("");
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white w-full h-full gap-6 items-center justify-center py-10 px-5 rounded-xl shadow-md"
    >
      <Input
        name="firt_name"
        type="text"
        placeholder="First Name"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={error}
      />
      <Input
        name="last_name"
        type="text"
        placeholder="Last Name"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={error}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email Adress"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={error}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={error}
      />
      <Button
        styles="w-full rounded bg-green text-white px-10 py-5 uppercase font-700 shadow-md shadow-dgreen pointer hover:bg-lgreen"
        text="claim your free trial"
      />
      <span className="text-s text-center text-gblue">
        By clicking the button, you are agreeing to our
        <span className="font-700 text-red"> Terms of Services</span>
      </span>
    </form>
  );
};

export default Form;
