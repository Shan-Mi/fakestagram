import React from "react";
import "./CardItem.scss";
import WithSpinner from "./WithSpinner";
import CardsPreview from "./CardsPreview";
// import CardDetail from "./CardDetail";
// import { CardDetailWrapper } from "./CardDetail.styles";

const CardItem = ({ id, data, detailedPage = "false" }) => {
  return <CardsPreview data={data} id={id} detailedPage={detailedPage} />;
};

export default WithSpinner(CardItem);
