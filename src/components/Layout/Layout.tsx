interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Layout = ({ title, children }: Props) => {
  return (
    <div>
      <h3 className="uppercase text-base font-bold mb-3">{title}</h3>
      {children}
    </div>
  );
};

export default Layout;
