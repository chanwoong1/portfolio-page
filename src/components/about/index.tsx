import React, { useEffect, useRef, useMemo, memo, useState } from "react";
import * as S from "./index.styled";
import AboutView from "./view";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  innerWidth: number;
  innerHeight: number;
}

const About: React.FC<AboutProps> = ({
  aboutRef,
  innerWidth,
  innerHeight,
}: AboutProps) => {
  return (
    <AboutView
      aboutRef={aboutRef}
      innerWidth={innerWidth}
      innerHeight={innerHeight}
    />
  );
};

export default memo(About);
