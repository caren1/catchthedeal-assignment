import React, { useState } from "react";
import {
  OfferContainer,
  OfferHeading,
  OfferPrice,
  OfferPromo,
  OfferPromoSpan,
  OfferCodeContainer,
  CodeSpan,
  CodeFieldSet,
  CodeLegend,
  CodeInput,
  OfferQuantityCounter,
  CountDownContainer,
  TimeSpan,
} from "./Offer.elements";
import IconWithInfo from "../IconWithInfo/IconWithInfo";
import Button from "../Button/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Offer = ({ offer }) => {
  console.log(offer);

  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  let offerCounter = null;
  if (offer.hasOwnProperty('expires')) {
    let countDownDate = new Date(offer.promo.expires).getTime();
    let countTheTime = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setHour(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(countTheTime);
        setHour("");
        setMinutes("");
        setSeconds("");
      }
    }, 1000);

    offerCounter = (
      <CountDownContainer>
        <TimeSpan>{hour}</TimeSpan>:<TimeSpan>{minutes}</TimeSpan>:
        <TimeSpan>{seconds}</TimeSpan>
      </CountDownContainer>
    );
  }

  const handleCodeCopy = () => {
    const codeInput = document.getElementById("promocode");
    codeInput.select();
    codeInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the code: " + codeInput.value);
  };

  let offerPromo = null;
  if (offer.promo) {
    offerPromo = (
      <>
        <OfferPromo>
          Get <OfferPromoSpan>{offer.promo.discount}%</OfferPromoSpan> discount
        </OfferPromo>
        <OfferCodeContainer>
          <CodeSpan>with this code</CodeSpan>
          <CodeFieldSet>
            <CodeLegend>click to copy</CodeLegend>
            <CodeInput
              type="text"
              value={offer.promo.code}
              placeholder={offer.promo.code}
              id="promocode"
              onClick={handleCodeCopy}
              readOnly
            ></CodeInput>
          </CodeFieldSet>
          {offer.promo.quantity && (
            <OfferQuantityCounter>
              {offer.promo.quantity} codes left
            </OfferQuantityCounter>
          )}
          {offerCounter}
        </OfferCodeContainer>
      </>
    );
  }

  return (
    <OfferContainer>
      <IconWithInfo
        reverse={true}
        content={<FavoriteBorderIcon />}
        description={"Add to Follow"}
      />
      <OfferHeading>{offer.title}</OfferHeading>
      <OfferPrice>{offer.price} PLN</OfferPrice>
      {offerPromo}
      <IconWithInfo
        content={<FavoriteBorderIcon />}
        description={"Follow this course to get discount notifications!"}
      />
      <IconWithInfo
        content={offer.participants}
        description={"Superheroes that have checked this course"}
      />
      <Button address={offer.url} />
    </OfferContainer>
  );
};

export default Offer;
