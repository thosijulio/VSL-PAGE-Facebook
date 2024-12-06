import dynamic from "next/dynamic";

import PostDetails from "./components/PostDetails";
import Video from "./components/Video";

const DynamicPostDetails = dynamic(() => import("./components/PostDetails"), {
  ssr: false,
});
const DynamicVideo = dynamic(() => import("./components/Video"), {
  ssr: false,
});
const DynamicPostStats = dynamic(() => import("./components/PostStats"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="my-[2px] ">
      <DynamicPostDetails />
      <DynamicVideo />
      <DynamicPostStats />
    </div>
  );
}
