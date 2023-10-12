import { useMediaQuery } from "react-responsive";

type Props = {
  children: React.ReactNode;
};

const NotMobile = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop && children;
};

const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile && children;
};

export default { NotMobile, Mobile };
