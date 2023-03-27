import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { cardI } from "../../types";
import { renderCardContainers } from "./cardCarrousell.utils";

type cardCarrousellProps = {
  cards: cardI[];
};

const cardOptions = {
  height: "500",
  width: "auto",
  playerVars: {
    autoplay: 0,
  },
};

export const CardCarrousellView = ({ cards }: any) =>
  //    } : cardCarrousellProps
  {
    const currentWidth = window.innerWidth;

    return (
      <Container
        sx={{
          width: "100vw",
        }}
      >
        <Carousel>
          {renderCardContainers(currentWidth, cards, cardOptions)}
        </Carousel>
      </Container>
    );
  };
