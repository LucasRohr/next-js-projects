import { useState } from "react";
import dynamic from "next/dynamic";

const DynamicVideo = dynamic(() => import("../../components/dynamic-video"));

export default function FeaturesHomePage() {
  const [renderVideo, setRenderVideo] = useState(false);

  return (
    <div>
      <h1>Features home page</h1>
      <input
        type="checkbox"
        onChange={(_) => {
          setRenderVideo((prevState) => !prevState);
        }}
      />

      {renderVideo && <DynamicVideo />}
    </div>
  );
}
