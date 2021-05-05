import { Image } from "semantic-ui-react";
import { history } from "../..";
import { IImage } from "../../models/image";

interface IProps {
  image: IImage;
}

const GalleryImage: React.FC<IProps> = ({ image }) => {
  return (
    <Image
      src={"https://www.homeland.aveneur.com/Images" + image.imageLocation}
      className="grid-image"
      onClick={() => history.push(`/image/${image.id}`)}
    />
  );
};

export default GalleryImage;
