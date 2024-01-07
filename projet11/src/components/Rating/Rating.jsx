import React from "react";
import "./Rating.css";
import IconStarEmpty from "../../components/Icons/StarEmpty";
import IconStarFull from "../../components/Icons/StarFull";

function Rating(props) {
  const ratingNumber = props.rating;
  let starsArray = [];

  for (let i = 0; i < 5; i++) {
    i < ratingNumber //4
      ? starsArray.push(<IconStarFull key={starsArray.toString()} />) //4
      : starsArray.push(<IconStarEmpty key={starsArray.toString()} />); //1
  }

  return (
    <div className="rate">
      <span>{starsArray}</span>
    </div>
  );
}

export default Rating;
