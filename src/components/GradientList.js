import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Swal from "sweetalert2";
import ScrollReveal from "scrollreveal";

const GradientList = () => {
  useEffect(() => {
    ScrollReveal().reveal(".card", { delay: 200 });
  }, []);
  const handleClick = () => {
    const ipAPI = "//api.ipify.org?format=json";

    const inputValue = fetch(ipAPI)
      .then((response) => response.json())
      .then((data) => data.ip);

    const { value: ipAddress } = Swal.fire({
      title: "Your code is generated",
      input: "text",
      inputLabel: "copy the code below",
      inputValue: randomGradient(),
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (ipAddress) {
      Swal.fire(`Your IP address is ${ipAddress}`);
    }
  };

  const [gradients, setgradients] = useState([...Array(100).keys()]);
  function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    var a = Math.random().toFixed(2);

    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  }

  const randomGradient = () => {
    let degre = Math.floor(Math.random() * 360);
    let fi = randomColor();
    let perc1 = Math.floor(Math.random() * 20);
    let sec = randomColor();
    let perc2 = Math.floor(Math.random() * 60);

    let third = randomColor();
    let perc3 = Math.floor(Math.random() * 100);

    return (
      "linear-gradient(" +
      degre +
      "deg" +
      ", " +
      fi +
      " " +
      "20" +
      "%" +
      ", " +
      sec +
      " " +
      "100" +
      "%" +
      ")"
    );
  };
  console.log(randomGradient());
  return (
    <div className="list-body">
      <Filter />
      <div className="list">
        {gradients.map((el) => (
          <div
            onClick={handleClick}
            className="card"
            style={{ background: `${randomGradient()}` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GradientList;
