import { Container, Box } from "@mui/material";

import baseImage from "../../images/inkSumosInformaticos.jpeg";

export const LandingImage = () => {
  // este es el container de la imagen y welcome
  // aqui podria ir el search general
  const currentWidth = window.innerWidth;

  const imageContainerWidth = currentWidth <= 500 ? "100%" : "45%";
  return (
    <Container
      sx={{
        padding: 1,
        margin: 1,
        backgroundColor: "black",
        width: imageContainerWidth,
        // borderRadius: '50%'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={baseImage}
          alt="some random img"
          width={"95%"}
          style={{
            borderRadius: "50%",
            width: "20vw",
            height: "20vw",
          }}
        />
      </Box>
    </Container>
  );
};
