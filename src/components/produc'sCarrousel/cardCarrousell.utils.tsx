import { CardPreviewView } from "./cardPreview.view";
import { Box } from "@mui/material";


export const renderCardContainers = (
  currentWidth: number,
  cardList: any[],
  cardOptions: any
) => {
  const cardContainer = {
    web: () => {
      const chunkedCards = [];
      if (cardList.length <= 2) {
        chunkedCards.push(
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: 1,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {cardList.map((card: any) => {
              return (
                <CardPreviewView
                  cardId={card.url}
                  img={card.img}
                  title={card.title ? card.title : null}
                />
              );
            })}
          </Box>
        );
      }
      for (let i = 0; i < cardList.length; i++) {
        if (cardList[i + 2]) {
          chunkedCards.push(
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: 1,
                alignItems: "center",
                justifyContent: "space-around",
                minHeight: "50vh",
              }}
            >
              {cardList.slice(i, i + 3).map((card: any) => {
                return (
                  <CardPreviewView
                    cardId={''}
                    img={card.img ? card.img : null}
                    title={card.title ? card.title : null}
                  />
                );
              })}
            </Box>
          );
        }
      }
      return chunkedCards;
    },
    mobile: () => {
      return cardList.map((card: any) => {
        return (
          <CardPreviewView
            cardId={card.id}
            img={card.img ? card.img : null}
            title={card.title ? card.title : null}
          />
        );
      });
    },
  };
  if (currentWidth <= 500) {
    return cardContainer.mobile();
  } else {
    return cardContainer.web();
  }
};
