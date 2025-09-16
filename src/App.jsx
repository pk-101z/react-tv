import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowDetails from "./shows/ShowDetails.jsx";
import ShowSelection from "./shows/ShowSelection.jsx";

export default function App() {
  // start with the first show selected
  const [selectedShow, setSelectedShow] = useState(tvShows[0]);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection 
          shows={tvShows} 
          onSelectShow={setSelectedShow} 
          selectedShow={selectedShow}
        />
      </header>

      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}