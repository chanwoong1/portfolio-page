import React, { useEffect, useRef, useMemo, memo, useState } from "react";
import * as S from "./index.styled";
import AboutView from "./view";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  return <AboutView aboutRef={aboutRef} />;
};

export default memo(About);
