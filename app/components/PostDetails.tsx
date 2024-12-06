import Dot from "@/public/assets/icons/dot.svg";
import EarthGlobe from "@/public/assets/icons/earth-globe.svg";
const PostDetails = () => {
  return (
    <section className="flex flex-col justify-between bg-background p-[10px] w-[100%]">
      <div className="flex justify-between bg-background w-[100%]">
        <div className="flex gap-[5px] flex-grow">
          <img
            className="rounded-full w-[48px] h-[48px]"
            alt="profile"
            src="/assets/images/profile.png"
          />
          <div className="flex flex-col gap-0">
            <h4 className="font-bold text-title-color text-[16px] mb-[-5px]">
              Muammar Gaddafi Fan Page
            </h4>
            <div className="text-subtitle-color text-[12px] flex items-center">
              <p>16 de dez. de 2024</p>
              <Dot
                style={{ fill: "var(--subtitle-color)" }}
                className="w-[5px] h-[5px] flex justify-center items-center ml-[5px]"
              />
              <EarthGlobe
                style={{ fill: "var(--subtitle-color)" }}
                className="w-[26px] h-[26px] flex justify-center items-center"
              />
            </div>
          </div>
        </div>
        <div className="flex pt-[7px]">
          <Dot
            style={{ fill: "var(--subtitle-color)" }}
            className="w-[8px] h-[8px] flex justify-center items-center"
          />
          <Dot
            style={{ fill: "var(--subtitle-color)" }}
            className="w-[8px] h-[8px] flex justify-center items-center"
          />
          <Dot
            style={{ fill: "var(--subtitle-color)" }}
            className="w-[8px] h-[8px] flex justify-center items-center"
          />
        </div>
      </div>
      <div className=" items-center justify-center text-title-color text-[16px]">
        <p className="inline">VJ Penn vs. Skadir Tariashi 🧑🏻‍🍳🔥</p>{" "}
        <span
          className="font-semibold"
          style={{ color: "var(--hashtag-color)" }}
        >
          #jonjones #ufc #cauemoura #macphone #eminem #ornamentation #garrafa
        </span>
      </div>
    </section>
  );
};

export default PostDetails;
