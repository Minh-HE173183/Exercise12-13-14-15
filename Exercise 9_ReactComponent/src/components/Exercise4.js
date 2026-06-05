// Exercise 4: SimpleCard Component - Wrapper component displaying Title, Description, and Image
import Exercise4Title from "./Exercise4Title";
import Exercise4Description from "./Exercise4Description";
import Exercise4Image from "./Exercise4Image";
import "./Exercise4.css";

function Exercise4({ item }) {
  return (
    <div className="simple-card">
      <Exercise4Image url={item.imageUrl} alt={item.title} />
      <div className="card-content">
        <Exercise4Title text={item.title} />
        <Exercise4Description text={item.description} />
      </div>
    </div>
  );
}

export default Exercise4;
