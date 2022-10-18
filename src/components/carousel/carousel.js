import { Carousel } from "3d-react-carousal";
import PROJECTS from "./project-constants";
import GoToNext from "../navigation/next-nav";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function CarouselContainer() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="carousel-section">
      <h1 className="title">Some of my past projects:</h1>
      <div className="carousel">
        <Carousel slides={PROJECTS} />
      </div>
      {width > 769 && height > 700 && (
        <GoToNext nextScene="scene4" text="next" />
      )}
    </div>
  );
}
