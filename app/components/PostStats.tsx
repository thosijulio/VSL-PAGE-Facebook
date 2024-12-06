import LikeIcon from "@/public/assets/icons/like.svg";
import CommentIcon from "@/public/assets/icons/comment.svg";
import ShareIcon from "@/public/assets/icons/share.svg";
const PostStats = () => {
  return (
    <section className="w-full bg-background flex items-center justify-start flex-col px-[10px] py-[3px]">
      <div className="flex items-center justify-start w-full gap-[5px]">
        <div className="flex items-center justify-center">
          <img
            alt="like"
            className="w-[16px] h-auto"
            src="/assets/images/like.png"
          />
          <img
            alt="heart"
            className="w-[16px] h-auto"
            src="/assets/images/heart.png"
          />
        </div>
        <p className="text-description-color text-[16px]">
          Fausto Silva e outras 95 mil pessoas
        </p>
      </div>
      <div className="text-[14px] flex items-center justify-evenly w-full text-subtitle-color">
        <div className="w-[100px] bg-box-background flex items-center justify-center h-[35px] rounded-[160px] gap-[4px]">
          <LikeIcon
            className="h-[19px] w-[19px]"
            style={{ stroke: "var(--subtitle-color)" }}
          />
          <p>109 mil</p>
        </div>
        <div className="w-[100px] bg-box-background flex items-center justify-center h-[35px] rounded-[160px] gap-[4px]">
          <CommentIcon
            className="h-[16px] w-[16px]"
            style={{ stroke: "var(--subtitle-color)" }}
          />
          <p>2 mil</p>
        </div>
        <div className="w-[100px] bg-box-background flex items-center justify-center h-[35px] rounded-[160px] gap-[4px]">
          <ShareIcon
            className="h-[16px] w-[16px]"
            style={{ stroke: "var(--subtitle-color)" }}
          />
          <p>2,4 mil</p>
        </div>
      </div>
    </section>
  );
};

export default PostStats;
