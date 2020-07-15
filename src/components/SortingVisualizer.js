import React, { useEffect, useState } from "react";
import BottomBar from "./BottomBar";
import { mergeSort as MS } from "./helper/mergeSort";
import "./SortingVisualizer.css";

const ANIMATION_DURATION = 3;

function SortingVisualizer() {
  var [array, setArray] = useState([]);

  var resetArray = () => {
    let newArray = [];
    for (let i = 0; i < 180; i++) {
      newArray.push(Math.floor(Math.random() * 650 + 5));
    }
    setArray(newArray);
  };

  useEffect(() => {
    resetArray();
  }, []);

  var mergeSort = () => {
    var animations = MS(array);

    // console.log(array_bars);
    // console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      var array_bars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 != 2;
      if (isColorChange) {
        const [barOneId, barTwoId] = animations[i];
        const color = i % 3 == 0 ? "white" : "#65bda3a4";
        setTimeout(() => {
          array_bars[barOneId].style.backgroundColor = color;
          array_bars[barTwoId].style.backgroundColor = color;
        }, i * ANIMATION_DURATION);
      } else {
        const [barOneId, newBarHeight] = animations[i];
        setTimeout(() => {
          array_bars[barOneId].style.height = `${newBarHeight}px`;
        }, i * ANIMATION_DURATION);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          for (let j = 0; j < array_bars.length; j++) {
            setTimeout(() => {
              array_bars[j].style.backgroundColor = "white";
            }, j * ANIMATION_DURATION);
          }
        }, (i + 1) * ANIMATION_DURATION);
      }
    }
    // console.log("DONE");
  };

  return (
    <div
      className="page-root"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <div className="array-container">
        {array.map((i, index) => {
          return (
            <div
              className="array-bar"
              key={index}
              style={{
                height: i,
              }}
            ></div>
          );
        })}
      </div>
      <div>
        <BottomBar clickReset={resetArray} clickMerge={mergeSort} />
      </div>
    </div>
  );
}

export default SortingVisualizer;
