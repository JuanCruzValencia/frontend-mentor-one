type ButtomProps = {
  styles: string;
  text: React.ReactNode;
};

const Button: React.FC<ButtomProps> = ({ styles, text }) => {
  return (
    <>
      <button className={styles}>{text}</button>
    </>
  );
};

export default Button;
