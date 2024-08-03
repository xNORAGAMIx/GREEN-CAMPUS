// YouTubeEmbedComponent.js
import imageTag from "../assets/green.jpg";

const YouTubeEmbedComponent = () => {
  return (
    <div id="home"  className="relative w-full h-screen -mt-52">
      <img
        src={imageTag}
        alt=""
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default YouTubeEmbedComponent;
