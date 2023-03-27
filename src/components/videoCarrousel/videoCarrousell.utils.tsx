import { VideoPreviewView } from '../videoPreview/videoPreview.view'
import { Box } from '@mui/material'
import getYouTubeID from 'get-youtube-id'

export const renderVideoContainers = (
    currentWidth: number,
    videosList: any[],
    videoOptions: any
) => {
    const videoContainer = {
        web: () => {
            const chunkedVideos = [];
            if(videosList.length <=2){
                chunkedVideos.push(
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: 1,
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}
                    >
                        {
                            videosList.map(
                                (video: any)=>{
                                    return(
                                    <VideoPreviewView 
                                        videoId={video.url}
                                        options={videoOptions}
                                        title={video.title ? video.title : null}
                                    />)
                                }
                            )
                        }
                    </Box>
                )
            }
            for(let i = 0; i < videosList.length; i++) {
                if(videosList[i+2]){
                    chunkedVideos.push(
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: 1,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                minHeight: '50vh'
                            }}
                        >
                            {
                                videosList.slice(i, (i+3)).map(
                                    (video: any)=>{
                                        return(
                                        <VideoPreviewView 
                                            videoId={getYouTubeID(video.url) as string}
                                            options={videoOptions}
                                            title={video.title ? video.title : null}
                                        />)
                                    }
                                )
                            }
                        </Box>
                    )
                }
            }
            return chunkedVideos;
        },
        mobile: () => {
            return (
                videosList.map((video: any)=>{
                    return(
                    <VideoPreviewView 
                        videoId={video.id}
                        options={videoOptions}
                        title={video.title ? video.title : null}
                    />)
                })
            )
        }
    }
    if(currentWidth<=500){
        return videoContainer.mobile()
    }else{
        return videoContainer.web()
    }

}
