interface Props {
  placeholder: string;
  type?: string;
}

const Input = ({ placeholder, type }: Props) => {
  return (
    <div>
      <input
        className="focus:outline-none w-full py-2 px-4 text-sm border placeholder:text-gray-700 border-gray-300"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
