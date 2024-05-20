// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [img, setImg] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const URL = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((img) => {
        setImg(img.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <div>
      <img alt="A Random Dog" src={img} />
    </div>
  );
}

export default App;
