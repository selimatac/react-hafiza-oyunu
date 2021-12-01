import React, { useEffect, useState } from "react";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [newSet, setNewSet] = useState([]);
  const [randomBirds, setRandomBirds] = useState([]);
  const birds = [
    "ab1",
    "ab1",
    "ab2",
    "ab2",
    "ab3",
    "ab3",
    "ab4",
    "ab4",
    "ab5",
    "ab5",
    "ab6",
    "ab6",
    "ab7",
    "ab7",
    "ab8",
    "ab8",
  ];
  const shuffle = (o) => {
    for (
      var j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };
  useEffect(() => {
    setRandomBirds(shuffle(birds));
  }, []);
  return (
    <div className="game">
      {randomBirds.map((x, index) => {
        return (
          <div
            className={`bird ${
              index === selectedItemIndex || newSet.includes(x) ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              setSelectedItem(x);
              setSelectedItemIndex(index);
              index !== selectedItemIndex &&
                selectedItem === x &&
                setNewSet([...newSet, x]);
            }}
          >
            <img src={`./images/${x}.png`} alt={x} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
