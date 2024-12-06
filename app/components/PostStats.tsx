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
    </section>
  );
};

export default PostStats;
