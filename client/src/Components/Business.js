import { useState, useContext } from "react";
import AddReview from "./Helpers/AddReview";
import MapReviews from "./Helpers/MapReviews";
import { BusinessContext } from "./Contexts/BusinessContext";

function Business() {
  const [clicked, setClicked] = useState(false);
  const [stars, setStars] = useState(1);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const { business } = useContext(BusinessContext);

  const resetForm = (e) => {
    e.preventDefault();
    // Reset stars
    [...Array(5)].map((x, i) => {
      return document
        .querySelector(`#star-${i + 1}`)
        .classList.replace("fas", "far");
    });

    // reset state
    setStars(1);
    setReview("");
    setClicked(false);
  };
  const submitReview = (e) => {
    e.preventDefault();

    const newReview = {
      rating: stars,
      description: review,
    };

    setReviews([...reviews, newReview]);

    resetForm(e);
  };
  const deleteReview = (e, index) => {
    e.preventDefault();

    const clone = [...reviews];
    const newState = clone.filter((x, i) => index !== i);
    setReviews(newState);
  };
  return (
    <div>
      <h1 className="display-4">{business.name}</h1>
      <AddReview
        stars={stars}
        setStars={setStars}
        review={review}
        setReview={setReview}
        clicked={clicked}
        setClicked={setClicked}
        submitReview={submitReview}
        resetForm={resetForm}
      />
      <MapReviews reviews={reviews} deleteReview={deleteReview} />
    </div>
  );
}

export default Business;
