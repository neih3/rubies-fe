interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="flex relative justify-around mb-8">
      <h3 className="after:content-['']  after:w-14 after:h-2 after:border-black capitalize pb-3 text-2xl font-medium text-center w-72 border-solid border-b-4 border-gray-400">
        {title}
      </h3>
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2%] w-14 h-1 bg-black"></span>
    </div>
  );
};

export default Title;
