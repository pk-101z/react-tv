import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import { useState } from "react";

export default function ShowDetails({ show }) {

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
