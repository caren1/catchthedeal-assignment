import React from "react";
import {
  IconWithInfoContainer,
  IconWrapper,
  IconInfo,
} from "./IconWithInfo.elements";

const IconWithInfo = ({ content, description, reverse }) => {
  let shouldBeReversed = false;
  if (reverse) {
    shouldBeReversed = true;
  }

  // passing prop to styledcomps not working, check why
  return (
    <IconWithInfoContainer reversed={shouldBeReversed}>
      <IconWrapper>{content}</IconWrapper>
      <IconInfo reversed={shouldBeReversed}>{description}</IconInfo>
    </IconWithInfoContainer>
  );
};

export default IconWithInfo;
