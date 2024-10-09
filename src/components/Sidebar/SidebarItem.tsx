interface Props {
  title: string;
  data: string[];
}

const SidebarItem = ({ title, data }: Props) => {
  return (
    <div className="mb-6">
      <h3 className="uppercase font-bold mb-4">{title}</h3>
      <ul className="flex flex-col gap-2">
        {data.map((item: string) => {
          return (
            <>
              <li className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="block capitalize text-sm">{item}</span>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarItem;
