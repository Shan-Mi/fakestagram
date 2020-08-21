import styled, { css } from "styled-components";

const detailedStyle = css`
  min-width: 200px;
  margin-top: 3rem;
  flex: unset;
`;

const previewStyle = css`
  display: flex;
  @media screen and (min-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (min-width: 1200px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

const getCardPageStyles = (props) => {
  if (props.detailedPage === "false") {
    return previewStyle;
  }
  return detailedStyle;
};

export const CardsPreviewWrapper = styled.div`
  position: relative;
  /* min-width: 200px; */
  width: 100%;
  padding: 0 15px;

  ${getCardPageStyles}
`;
