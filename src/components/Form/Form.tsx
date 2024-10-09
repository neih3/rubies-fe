import Title from "../ui/Title";

interface Props {
  children?: React.ReactNode;
  title: string;
}

const Form = ({ children, title }: Props) => {
  return (
    <div
      className="py-4 px-4 rounded-xl"
      style={{ boxShadow: "0px 1px 69.16px 6.84px rgba(20,64,51,0.05)" }}
    >
      <Title title={title}></Title>
      {children}
    </div>
  );
};

export default Form;
