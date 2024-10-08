import * as S from "./styled";
import { useRef, useState } from "react";
import { SubTitle } from "../SubTitle/SubTitle";
import NoticeIcon from "../../../assets/images/NoticeIcon_Orange.svg";
import { StarBar } from "../starBar/StarBar";
import { StarTimeTable } from "../StarTimeTable/StarTimeTable";
export const TimeTable = ({ onDetailClick }) => {
  const timeTableRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleStarClick = (starId) => {
    setSelectedId(starId);
    setIsFixed(true);
  };
  return (
    <S.Container>
      <SubTitle
        title={"공연정보"}
        subTitle={"공연 시작 시간 기준으로 표기됩니다."}
      />
      <S.NoticeBar>
        <img src={NoticeIcon} alt={"공지 아이콘"} />
        <div id="notice">
          사이트 내 정보와 실제 공연은 상황에 따라 다르게 진행될 수 있습니다.
        </div>
      </S.NoticeBar>
      <StarBar onStarClick={handleStarClick} />
      <S.StarTimeTableContainer ref={timeTableRef}>
        <StarTimeTable
          ref={timeTableRef}
          selectedId={selectedId}
          onDetailClick={onDetailClick}
        />
      </S.StarTimeTableContainer>
    </S.Container>
  );
};
