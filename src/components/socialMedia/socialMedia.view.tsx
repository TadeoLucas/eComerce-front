// import { useNavigate } from 'react-router-dom';
import {
    iconObjectI
} from './socialMedia.interface';
import {
    IconButton,
    Box,
    Link
} from '@mui/material'
import {
    Instagram,
    FacebookSharp,
    YouTube
} from '@mui/icons-material'
import {
    FACEBOOK_URL,
    INSTAGRAM_URL,
    YOUTUBE_URL
} from './socialMedia.contants'


const baseIconStyles = {
    color: 'white',
    padding: 3
}

const SocialMediaView = (props: any) => {
    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: '5vh',
                    maxHeight: '15vh',
                    top: 0,
                    // marginTop: '1vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    backgroundColor: '#000000'
                }}
            >
                <Link
                    sx={baseIconStyles}
                    // ref={FACEBOOK_URL}
                    onClick={()=>window.open(FACEBOOK_URL)}

                >
                    <FacebookSharp />
                </Link>
                <Link
                    sx={baseIconStyles}
                    onClick={()=>window.open(YOUTUBE_URL)}
                >
                    <YouTube />
                </Link>
                <Link
                    sx={baseIconStyles}
                    onClick={()=>window.open(INSTAGRAM_URL)}
                >
                    <Instagram />
                </Link>
            </Box>
        </>
    )
}

export {
    SocialMediaView
}