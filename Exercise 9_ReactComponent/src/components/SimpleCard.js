// SimpleCard Component - Wrapper component displaying Title, Description, and Image
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
import "./SimpleCard.css";

function SimpleCard({ item }) {
  return (
    <div className="simple-card">
      <Image url={item.imageUrl} alt={item.title} />
      <div className="card-content">
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
}

export default SimpleCard;
