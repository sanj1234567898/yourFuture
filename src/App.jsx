import React from "react";
import "./scss/app.scss";
import Tabel from "./components/Tabel";
import { Search } from "./components/Search";

function App() {
  const [selectedProps, isSelectedProps] = React.useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Frontend",
    "Senior",
    "Python",
    "Fullstack",
    "Midweight",
    "Junior",
  ]);

  const handleSelectedProps = (value) => {
    if (!selectedProps.includes(value)) {
      isSelectedProps([...selectedProps, value]);
    }
  };

  return (
    <>
      <Search selectedProps={selectedProps} isSelectedProps={isSelectedProps} />
      <Tabel
        handleSelectedProps={handleSelectedProps}
        selectedProps={selectedProps}
      />
    </>
  );
}

export default App;
