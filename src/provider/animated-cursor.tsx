import React from "react";
import AnimatedCursor from "react-animated-cursor";

export const AnimatedCursorProvider = () => {
  return (
    <div className="App">
      <AnimatedCursor
        // color="193, 11, 111"
        // outerAlpha={0.2}
        // innerScale={0.7}
        // outerScale={5}
        color="95, 20, 123"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        // outerAlpha={0}
        outerStyle={{
          mixBlendMode: "normal",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};
