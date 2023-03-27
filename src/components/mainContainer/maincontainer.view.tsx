import { Container, Box } from '@mui/material';
import { childrenProp } from '../../types';
import Image from '../../images/ESTUDIO_SOLO.png'

const currentWidth = window.innerWidth;

const backgroundImage = Image

const mainContainerStyles = {
    maxWidth: currentWidth,
    // margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
}
export const MainContainer: React.FC<childrenProp> = (
    {children}
) => {
    return (
        <Box
            sx={mainContainerStyles}
        >
            {children}
        </Box>
    )
}