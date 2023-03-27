import { Container, Box, Button } from "@mui/material";
// import PropTypes, { InferProps } from "prop-types";
//import { useNavigate } from "react-router";
import shoppingCart from "../../images/shopping-cart.jpg";

const hoverButton = {
  "&:hover": {
    transitionDelay: '1',
    transform: "scale(1.2)",
  }
  // "&:hover": {
  //   transform: 'traslate(0, 0), scale(2)'
  // },
};

export const LandingCart = () => {
//  const navigate = useNavigate();
  const currentWidth = window.innerWidth;

  const imageContainerWidth = currentWidth <= 500 ? "100%" : "45%";
  return (
    <Container
      sx={{
        backgroundColor: "black",
        width: imageContainerWidth,
      }}
    >
      <Button
        sx={hoverButton}
        //onClick={() => (handleClick as Function)()}
        //onClick={() => navigate('')}
        onClick={() => alert('Hola')}
      >
        <img
          src={shoppingCart}
          alt="cart img"
          style={{
            borderRadius: "50%",
            width: "15vw",
          }}
        />
      </Button>
    </Container>
  );
}

// LandingCart.propTypes = {
//   handleClick: PropTypes.func,
// };
