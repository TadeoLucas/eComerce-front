import { Container } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { videoI } from '../../types'
import {renderVideoContainers} from './videoCarrousell.utils';

type videoCarrousellProps = {
    videos: videoI[]
}

const videoOptions = {
    height: '500',
    width: 'auto',
    playerVars: {
        autoplay: 0
    },
}

export const VideoCarrousellView = (
    {
        videos
    } : videoCarrousellProps
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
                    renderVideoContainers(
                        currentWidth,
                        videos,
                        videoOptions
                    )
                }
            </Carousel>
        </Container>
    )
}