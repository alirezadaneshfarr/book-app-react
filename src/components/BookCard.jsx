import { useState } from "react";
import { TiHeartOutline } from "react-icons/ti";

const BookCard = ({ data, handleLikedList }) => {
  const { title, author, image, language, pages } = data;

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };

  return (
    <div className="container flex bg-[#303030] my-2 rounded-xl px-8 py-4 items-center">
      <img src={image} alt={title} className="rounded-lg w-20" />
      <div className="w-full ml-4 flex flex-col justify-between">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="pt-2 font-medium">{author}</p>
        <div className="mt-3">
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler} className="">
        <TiHeartOutline color={like ? "red" : "#e0e0e0"} fontSize={"1.4rem"} />
      </button>
    </div>
  );
};

export default BookCard;
