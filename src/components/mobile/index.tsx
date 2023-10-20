import { useMediaQuery } from "react-responsive";

type Props = {
  children: React.ReactNode;
};

const Desktop = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop && children;
};

const Laptop = ({ children }: Props) => {
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  return isLaptop && children;
};

const Tablet = ({ children }: Props) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet && children;
};

const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile && children;
};

const SmallMobile = ({ children }: Props) => {
  const isSmallMobile = useMediaQuery({ maxWidth: 479 });
  return isSmallMobile && children;
};

export { Desktop, Laptop, Tablet, Mobile, SmallMobile };
