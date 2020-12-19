import React, { useState } from "react";

// styled-components
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
} from "./Offer.elements";

//components
import IconWithInfo from "../IconWithInfo/IconWithInfo";
import Button from "../Button/Button";
import DateCounter from "../DateCounter/DateCounter";

//icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Offer = ({ offer }) => {
  const [isFavourite, setFavourite] = useState(false);

  const onLikeHandler = () => {
    setFavourite(!isFavourite);
  };

  const handleCodeCopy = (id) => {
    const codeInput = document.getElementById(`promocode${id}`);
    codeInput.select();
    codeInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert(`ENJOY THE DISCOUNT : { { { ${codeInput.value} } } } `);
    document.getElementById("offers").focus();
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
              id={`promocode${offer.id}`}
              onClick={() => handleCodeCopy(offer.id)}
              readOnly
            ></CodeInput>
          </CodeFieldSet>

          {offer.promo.quantity && (
            <OfferQuantityCounter>
              {offer.promo.quantity} codes left
            </OfferQuantityCounter>
          )}

          {offer.promo.expires ? <DateCounter offer={offer} /> : null}
        </OfferCodeContainer>
      </>
    );
  }

  return (
    <OfferContainer>
      <IconWithInfo
        reverse={true}
        content={<FavoriteBorderIcon />}
        isFavourite={isFavourite}
        onLikeHandler={onLikeHandler}
        description={"Add to Follow"}
      />
      <OfferHeading>{offer.title}</OfferHeading>
      <OfferPrice>{offer.price} PLN</OfferPrice>

      {offerPromo}

      <IconWithInfo
        isFavourite={isFavourite}
        content={<FavoriteBorderIcon />}
        onLikeHandler={onLikeHandler}
        description={"Follow this course to get discount notifications!"}
      />

      <IconWithInfo
        isFavourite={false}
        isNumber={true}
        content={offer.participants}
        description={"Superheroes that have checked this course"}
      />
      <Button address={offer.url} />
    </OfferContainer>
  );
};

export default Offer;
