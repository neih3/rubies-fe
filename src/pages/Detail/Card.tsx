const Card = () => {
  return (
    <div className="flex gap-3">
      <div className="w-3/12">
        {" "}
        <img
          className="w-full"
          src="https://bizweb.dktcdn.net/thumb/large/100/462/587/products/6-dc088f21-9c26-4325-ae39-80abe3d41d78.png?v=1728039047187"
          alt=""
        />
      </div>
      <div className="w-9/12">
        <h3>Áo Kiểu Nữ Yulia Top RR24AK89</h3>
        <p className="mt-2">
          460.000
          <span>vnđ</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
