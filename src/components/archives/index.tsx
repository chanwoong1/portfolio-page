import React from "react";
import * as S from "./index.styled";

interface ArchivesProps {
  archivesRef: React.RefObject<HTMLDivElement>;
}

const Archives: React.FC<ArchivesProps> = ({ archivesRef }: ArchivesProps) => {
  return (
    <S.ArchivesWrapper id="archives" ref={archivesRef}>
      <S.ArchivesWrapper>기술 스택</S.ArchivesWrapper>
    </S.ArchivesWrapper>
  );
};

export default Archives;
