import { Box, Typography } from "@mui/material";

type videoPreviewProps = {
  cardId: string;
  img: string;
  title?: string;
};

export const CardPreviewView = ({
  cardId,
  img,
  title,
}: videoPreviewProps) => {

  // onClick={() => navigate(`/specific/prod/${card.url}`)}

  return (
    <Box
      sx={{
        margin: 1,
      }}
    >
      {title && img && <Typography>{title}</Typography>}
    </Box>
  );
};
