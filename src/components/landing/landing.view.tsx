import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { LandingImage } from "../landingImage/ladingImage.view";
import { LandigTextView } from "../landingText/LandingText.view";
import { NavBarController } from "../NavBar/NavBar.controller";
// import { SocialMediaController } from "../socialMedia/socialMedia.controller";
// mport { VideoCarrouselController } from "../produc'sCarrousel/videoCarrousel.controller";
import { LandingCart } from "../landingCart/landingCart.view";
import { CardCarrouselController } from "../produc'sCarrousel/cardCarrousel.controller";

const webHeaderSx = {
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
};

const mobileHeaderSx = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const commonHeaderSx = {
  display: "flex",
  backgroundColor: "#000000",
  marginTop: "3vh",
};

const mainLandingContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: 0,
  // width: '100%',
  padding: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

export const LandingView = () => {
  const currentWidth = window.innerWidth;

  return (
    <Box sx={mainLandingContainerStyle}>
      <Box
        sx={
          currentWidth <= 500
            ? {
                ...commonHeaderSx,
                ...mobileHeaderSx,
                marginTop: 0,
              }
            : {
                ...commonHeaderSx,
                ...webHeaderSx,
              }
        }
      >
        {/* {<SocialMediaController />} */}
        <LandingCart />
        <LandigTextView />
        <LandingImage />
      </Box>
        <NavBarController />
      <Container
        sx={{
          marginTop: "15vh",
          backgroundColor: "#000000",
        }}
      >
        <CardCarrouselController />
      </Container>
    </Box>
  );
};
