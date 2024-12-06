import Script from "next/script";

const Video = () => {
  return (
    <>
      <Script
        src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js"
        data-id="6744f304c77e39000ba0ab4d"
      ></Script>
      <div
        id="ifr_6744f304c77e39000ba0ab4d_wrapper"
        style={{ margin: "0 auto", width: "100%" }}
      >
        <div
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
          id="ifr_6744f304c77e39000ba0ab4d_aspect"
        >
          <iframe
            frameBorder="0"
            allowFullScreen={true}
            src="https://scripts.converteai.net/bd97980d-ffef-4260-a59f-4dcb756bd773/players/6744f304c77e39000ba0ab4d/embed.html"
            id="ifr_6744f304c77e39000ba0ab4d"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            referrerPolicy="origin"
            title="vsl"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
