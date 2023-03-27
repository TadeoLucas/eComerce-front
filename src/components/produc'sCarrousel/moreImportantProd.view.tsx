import { Container } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { cardI } from '../../types'
import { renderCardContainers } from './cardCarrousell.utils' 

type cardsCarrousellProps = {
    cards: cardI[]
}

const cardsOptions = {
    height: '500',
    width: 'auto',
    playerVars: {
        autoplay: 0
    },
}

export const VideoCarrousellView = (
    {
        cards
    } : cardsCarrousellProps
) => {
    const currentWidth = window.innerWidth;

    return (
        <Container
            sx={{
                width: '100vw'
            }}
        >
            <Carousel>
                {
                    renderCardContainers(
                        currentWidth,
                        cards,
                        cardsOptions
                    )
                }
            </Carousel>
        </Container>
    )
}