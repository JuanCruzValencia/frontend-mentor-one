import FormContainer from "../form/FormContainer";
import InfoContainer from "../info/InfoContainer";

const MainContainer: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full min-h-[100vh] bg-main-mobile bg-red px-5 py-[60px]">
      <InfoContainer />
      <FormContainer />
    </div>
  );
};

export default MainContainer;
