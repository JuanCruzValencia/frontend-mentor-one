import Button from "../common/Button";
import Input from "../common/Input";

const MainContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-[100vh] bg-main-mobile bg-red px-8 py-[60px]">
      <h2 className="text-[25px] text-white text-center font-700">
        Learn to code by watching others
      </h2>
      <span className="text-m text-white text-center font-600">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable
      </span>
      <Button
        styles="h-[80px] w-full bg-blue text-white font-700 py-4 px-14 rounded-xl shadow-xl"
        text="Try it free 7 days then $20/mo. thereafter"
      />
      <form className="flex flex-col bg-white w-full h-full gap-6 items-center justify-center py-10 px-5 rounded-xl">
        <Input
          name="firt_name"
          type="text"
          placeholder="First Name"
          styles="border-2"
        />
        <Input
          name="last_name"
          type="text"
          placeholder="Last Name"
          styles="border-2"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Adress"
          styles="border-2"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          styles="border-2"
        />
        <Button styles="bg-green text-white" text="claim your free trial" />
        <span>
          By Clicking the button, you are agreeing to our
          <span className="text-s font-700 text-red">Terms of Services</span>
        </span>
      </form>
    </div>
  );
};

export default MainContainer;
