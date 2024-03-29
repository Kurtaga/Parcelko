import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "src/pages/Home/HomePage";
import "./confirm.sass";

const Confirm = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  const selected: boolean = appContext.selectedFeatures.length > 0;

  // Navigate to DetailsPage when button is clicked and feature selected
  const handleClick = () => {
    const ids = appContext.selectedFeatures.map((feature) => feature.id);
    if (selected) navigate(`/tract?tract=${ids.join(",")}`);
  };

  return (
    <button
      className={`confirm ${selected ? "secondaryColor" : ""}`}
      onClick={handleClick}
    >
      <img src="src/assets/tick.svg"></img>
    </button>
  );
};

export default Confirm;
