import { Box, TextField, Typography } from "@mui/material"
import { youtubeOptionsI } from "./videoPreview.interface"
import { onReady } from './videoPreview.handlers';


type videoPreviewProps = {
    options: youtubeOptionsI,
    videoId: string,
    title?: string
}

export const VideoPreviewView = (
    {
        options,
        videoId,
        title
    }: videoPreviewProps
) => {
    return (
        <Box
            sx={{
                margin:1
            }}
        >
            {title&&<Typography>{title}</Typography>}
            
        </Box>
    )
}