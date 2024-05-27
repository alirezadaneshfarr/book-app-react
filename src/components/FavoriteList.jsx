const FavoriteList = ({ data }) => {
  return (
    <div
      className="container mx-auto w-[80%] rounded-lg 
    pt-3 pl-5 flex items-center bg-[#7c6ee9] mb-6">
      <img
        src={data.image}
        alt={data.title}
        className="w-[50px] rounded-lg my-3"
      />
      <p className="ml-5">{data.title}</p>
    </div>
  );
};

export default FavoriteList;
