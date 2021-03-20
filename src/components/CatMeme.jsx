import React, { useState, useEffect, useRef } from "react";

const CatMeme = () => {
  const canvas = useRef(null);
  const ctx = canvas.current.getContext("2d");

  useEffect(() => {
    if (canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 256 + 80);
    }
  }, [canvas]);

  let x = 0,
    y = 130,
    w = 20,
    h = 80;

  useEffect(() => {
    if (canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(x, y, w, h);
    }

    if (canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(380, 130, 20, 80);
    }
  }, [canvas]);

  window.onkeydown = function (event) {
    var keyPr = event.keyCode; //Key code of key pressed

    if (keyPr === 39 && x <= 460) {
      x = x + 20; //right arrow add 20 from current
    }

    ctx.clearRect(0, 0, 500, 500);

    fillRect(x, y, w, h);
  };

  return (
    <div>
      <div>
        <canvas ref={canvas} width={700} height={500} />
      </div>
    </div>
  );
};

export default CatMeme;
