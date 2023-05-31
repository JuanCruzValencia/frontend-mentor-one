import Form from "./Form";
import FormInfo from "./FormInfo";

const FormContainer = () => {
  return (
    <div className="flex flex-col basis-1/2 md:max-w-[500px] gap-5">
      <FormInfo />
      <Form />
    </div>
  );
};

export default FormContainer;
