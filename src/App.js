import React, { useState } from "react";
import "./styles.css";

const musicLibrary = {
  Pop: [
    { name: "Glimpse of us", artist: "Joji" },
    { name: "Levitating", artist: "Dua Lipa" },
    { name: "Heat Waves", artist: "Glass Animals" }
  ],

  Indie: [
    { name: "I Love You So", artist: "The Walters" },
    { name: "Space Song", artist: "Beach House" },
    { name: "Apocalypse", artist: "Cigarettes After Sex" }
  ],

  HipHop: [
    { name: "Mass Appeal", artist: "Gang Starr" },
    { name: "Always on time", artist: "Ja Rule" },
    { name: "Thot Shit", artist: "Megan Thee Stallion" }
  ],

  Metal: [
    { name: "One", artist: "Metallica" },
    { name: "Whiskey In The Jar", artist: "Metallica" },
    { name: "In The End", artist: "Linkin Park" }
  ]
};

const genresArray = Object.keys(musicLibrary);

export default function App() {
  const [selectedGenre, setGenre] = useState("Pop");

  function onClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        <span>beats</span>, the music recommender
      </h1>
      <p>The best music sorted according to your music taste.</p>

      <div>
        {genresArray.map((genre) => {
          return (
            <button className="btn" onClick={() => onClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>

      <div>
        <ul>
          {musicLibrary[selectedGenre].map((music) => {
            return (
              <li key={music.name}>
                <div className="music-name"> {music.name} </div>
                <div className="music-artist"> {music.artist} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
