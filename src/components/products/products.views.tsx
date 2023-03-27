import { Box, TextField, Container, Typography } from "@mui/material";

export const ProductForBuyingView = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            margin: 1,
            border: 'solid 2 ',
            borderRadius: 3
          }}
        >
          <img src="url"></img>
          <TextField>este seria el producto</TextField>
        </Box>
      </Container>
    </>
  );
};
