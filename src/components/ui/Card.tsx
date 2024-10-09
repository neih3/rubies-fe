interface Props {
  href: string;
  title?: string;
  price?: string;
}

const Card = ({ href, title, price }: Props) => {
  return (
    <div>
      <div className="cursor-pointer">
        <img className="w-full" src={href} alt="" />
      </div>
      <p className="text-sm mt-2">{title}</p>
      {price && <p className="mt-4 text-sm">{`${price} vnđ`}</p>}
    </div>
  );
};

export default Card;
