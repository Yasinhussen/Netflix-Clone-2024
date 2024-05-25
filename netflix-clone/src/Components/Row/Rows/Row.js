import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../Utils/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setmovies(request.data.results);
      } catch (error) {
        console.log("error :", error);
        
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    try {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
          (url) => {
            console.log(url);
            const urlparams = new URLSearchParams(new URL(url)?.search);
            console.log(urlparams);
            console.log(urlparams.get("v"));
            setTrailerUrl(urlparams.get("v"));
          }
        );
      }
    } catch (error) {
      console.log("error:", error);
    
    }
  };
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="R_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        <div className="youtubeTrailer">

        </div>
      </div>
    </div>
  );
}

export default Row;