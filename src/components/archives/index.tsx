import React, { useEffect, useState } from "react";
import * as S from "./index.styled";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface ArchivesProps {
  archivesRef: React.RefObject<HTMLDivElement>;
}

const Archives: React.FC<ArchivesProps> = ({ archivesRef }: ArchivesProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <S.ArchivesWrapper id="archives" ref={archivesRef}>
      <S.GithubInfoWrapper>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Chanwoong1&layout=compact&hide=jupyter notebook,html,tex" />
        {isMounted && (
          <div
            style={{
              width: "80%",
              height: "12.5rem",
              display: "flex",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e1e4e8",
            }}
          >
            <GitHubCalendar
              username="Chanwoong1"
              showWeekdayLabels
              blockSize={13}
              style={{
                width: "80%",
                color: "#000000",
              }}
              colorScheme="light"
              theme={{
                light: ["hsl(0, 0%, 92%)", "#0114bf"],
              }}
              renderBlock={(block, activity) =>
                React.cloneElement(block, {
                  "data-tooltip-id": "react-tooltip",
                  "data-tooltip-html": `${
                    activity.count
                  } contributions on ${formatDate(activity.date)}`,
                })
              }
            ></GitHubCalendar>
            <ReactTooltip id="react-tooltip" />
          </div>
        )}
        <img src="https://github-readme-stats.vercel.app/api/wakatime?username=chanwoong1&layout=compact" />
        <img src="https://github-readme-stats.vercel.app/api?username=Chanwoong1&show_icons=true" />
      </S.GithubInfoWrapper>
    </S.ArchivesWrapper>
  );
};

export default Archives;

const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${daysOfWeek[date.getDay()]}, ${
    monthsOfYear[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
};
