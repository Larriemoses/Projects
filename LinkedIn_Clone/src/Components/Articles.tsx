import React, { useState } from "react";
import { arrayOne, arrayTwo } from "./data/buttonsArray";

function ButtonSection() {
  const [showAll, setShowAll] = useState(false);

  // Initial set of buttons

  // Handler function for the toggle button
  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return <h1>Articles</h1>;
}

export default ButtonSection;
