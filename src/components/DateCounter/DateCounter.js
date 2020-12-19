import React, { useState, useEffect } from "react";
import {
  DateCounterContainer,
  TimeSpan,
  Separator,
  TimeInfo,
} from "./DateCounter.elements";

const DateCounter = ({ offer }) => {
  const calculateTimeLeft = () => {
    let differenceInTime =
      +new Date(offer.promo.expires).getTime() - +new Date();
    let timeLeft = {};

    if (differenceInTime > 0) {
      timeLeft = {
        hours: Math.floor(differenceInTime / (1000 * 60 * 60)),
        minutes: Math.floor((differenceInTime / 1000 / 60) % 60),
        seconds: Math.floor((differenceInTime / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <>
        <TimeSpan>{timeLeft[interval]}</TimeSpan>
        <Separator>:</Separator>
      </>
    );
  });

  return (
    <>
      <TimeInfo>This promo ends in :</TimeInfo>
      <DateCounterContainer>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <TimeSpan>Time has ended!</TimeSpan>
        )}
      </DateCounterContainer>
    </>
  );
};

export default DateCounter;
