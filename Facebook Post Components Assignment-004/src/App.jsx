import "./App.css";
import Card from "./components/card";
import HamasLogo from "./assets/logo/Hamas.png";
import BirdsLogo from "./assets/logo/birds.jpg";
import LifeLogo from "./assets/logo/life.jpg";
import BikerLogo from "./assets/logo/biker.jpg";
import NightLogo from "./assets/logo/night.jpg";
import image1 from "./assets/images/img1.png";
import image2 from "./assets/images/img2.jpg";
import video1 from "./assets/videos/vid1.mp4";
import video2 from "./assets/videos/vid2.mp4";

function App() {
  return (
    <div className="gap-8 flex flex-col">
      <Card
        logo={HamasLogo}
        usmername="Hamas"
        postTime="30 min ago"
        postPicture={image1}
        postText="Hamas is a Palestinian armed group and political movement in the Gaza Strip. On 7 October 2023 it attacked Israel, killing about 1,200 people and taking more than 250 hostages."
      />
      <Card 
        logo={BirdsLogo}
        usmername="Nature"
        postTime="4 days ago"
        postVideo={video1}
        postText="The video shows a peaceful river with birds flying above and a bear roaming nearby, all set in beautiful, green scenery. It’s a calming glimpse into nature's beauty."
      />
      <Card 
        logo={LifeLogo}
        usmername="Life’s Journey"
        postTime="3 weeks ago"
        postText="Life is like a unique book, where every moment writes a new story. In this book, our choices and experiences carve out new paths for us. Some pages are filled with joy, while others hide sorrows behind smiles. Each new beginning, each new day, brings a message of hope. It’s up to us to color this story with our words and actions. Because in the end, the true purpose of this journey of life is to embrace happiness, bring smiles to others, and transform our existence into a beautiful message."
      />
      <Card 
        logo={BikerLogo}
        usmername="Biker's"
        postTime="10 days ago"
        postPicture={image2}
      />
      <Card 
        logo={NightLogo}
        usmername="Night Scene"
        postTime="50 min ago"
        postVideo={video2}
      />
    </div>
  );
}

export default App;
