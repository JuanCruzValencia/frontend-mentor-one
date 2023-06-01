import Button from "../common/Button";
import Input from "../common/Input";
import useForm from "../hooks/useForm";
import { FormFields } from "../iinterfaces/interface";

const Form = () => {
  const { errors, handleChange, handleSubmit } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white w-full h-full gap-6 items-center justify-center py-10 px-5 rounded-xl shadow-md"
    >
      <Input
        name="first_name"
        type="text"
        placeholder="First Name"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={errors.first_name}
      />
      <Input
        name="last_name"
        type="text"
        placeholder="Last Name"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={errors.first_name}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email Adress"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={errors.email}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        styles="w-full border-2 p-4 border-gblue rounded placeholder:font-700 placeholder:text-grey"
        handleChange={handleChange}
        error={errors.password}
      />
      <Button
        styles="w-full rounded bg-green text-white px-10 py-5 uppercase font-700 shadow-md shadow-dgreen pointer hover:bg-lgreen"
        text="claim your free trial"
      />
      <span className="text-s text-center text-gblue px-6">
        By clicking the button, you are agreeing to our
        <span className="font-700 text-red"> Terms of Services</span>
      </span>
    </form>
  );
};

export default Form;
