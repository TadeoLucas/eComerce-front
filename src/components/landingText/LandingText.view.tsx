import { Container, Typography } from "@mui/material"


export const LandigTextView = () => {
    const currentWidth = window.innerWidth;
    const paragraphSx = currentWidth <= 500 ? {display: 'none'} : {display: 'inherit'};

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    boxSizing: 'content-box',
                    backgroundColor: '#000000'
                }}
            >
                <Typography
                    variant="h4"
                >
                    Tu Tienda Electronica.
                </Typography>
            </Container>
        </>
    )
}