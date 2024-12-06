import dynamic from "next/dynamic";

const DynamicPostDetails = dynamic(() => import("./components/PostDetails"));
const DynamicVideo = dynamic(() => import("./components/Video"));
const DynamicPostStats = dynamic(() => import("./components/PostStats"));

export default function Home() {
  return (
    <div className="my-[2px] ">
      <DynamicPostDetails />
      <DynamicVideo />
      <DynamicPostStats />
    </div>
  );
}
