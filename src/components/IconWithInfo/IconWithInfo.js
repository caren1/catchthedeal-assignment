import React from "react";
import {
  IconWithInfoContainer,
  IconWrapper,
  IconInfo,
} from "./IconWithInfo.elements";

const IconWithInfo = ({
  content,
  description,
  reverse,
  isFavourite,
  isNumber,
  onLikeHandler,
}) => {
  
  let contentArray = description.split(" ");
  let strongParagraph = contentArray.map((word, index) =>
    index === 0 ? <strong key={word}>{word}</strong> : " " + word
  );

  return (
    <IconWithInfoContainer reversed={reverse}>
      <IconWrapper
        isNumber={isNumber}
        isFavourite={isFavourite}
        onClick={onLikeHandler}
      >
        {content}
      </IconWrapper>
      <IconInfo reversed={reverse}>{strongParagraph}</IconInfo>
    </IconWithInfoContainer>
  );
};

export default IconWithInfo;
