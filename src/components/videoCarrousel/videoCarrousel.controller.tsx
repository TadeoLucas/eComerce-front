import { Box } from "@mui/material";
import { useState, useEffect, useCallback } from "react"
import { getMoreImportantProductsFromApi } from "../../externals/api/moreImportantsProd";
import { videoI } from "../../types";
import { VideoCarrousellView } from "./videoCarrousell.view";
import {
    getAllVideos
} from './viedoCarrousel.service';


export const VideoCarrouselController = () => {
    const [allVideos, setAllVideos] = useState<videoI[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchVideos = useCallback(
        async()=> {
            // return await getAllVideos()
            return await getMoreImportantProductsFromApi()
        },
        []
    )

    useEffect(  ()=>{
        fetchVideos().then(fetchedVideos => {
            if(fetchedVideos&&fetchedVideos.length){
                setAllVideos(fetchedVideos as videoI[])
                setIsLoading(false)
            }
        }).catch((error)=>{
            console.error((error as Error).message)
        })
    },[fetchVideos])

    return <>
        {
            isLoading ? 
                <Box>cargando hasta el infinito</Box> : 
                <VideoCarrousellView videos={allVideos}/>
        }
    </>
}