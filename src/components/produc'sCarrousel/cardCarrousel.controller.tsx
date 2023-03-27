import { Box } from "@mui/material";
import { useState, useEffect, useCallback } from "react"
import { getMoreImportantProductsFromApi } from "../../externals/api/moreImportantsProd";
import { cardI } from "../../types";
import { CardCarrousellView } from "./cardCarrousell.view";



export const CardCarrouselController = () => {
    const [cards, setCards] = useState<cardI[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchProducts = useCallback(
        async()=> {
            // return await getAllVideos()
            return await getMoreImportantProductsFromApi()
        },
        []
    )

    useEffect(  ()=>{
      fetchProducts().then(fetchProducts => {
        
        if(fetchProducts?.length){
              console.log("🚀 ~ file: cardCarrousel.controller.tsx:23 ~ fetchProducts ~ fetchProducts:", fetchProducts?.length)
                setCards(fetchProducts as cardI[])
                setIsLoading(false)
            }
        }).catch((error)=>{
            console.error((error as Error).message)
        })
    },[fetchProducts])

    return <>
        {
            isLoading ? 
                <Box>cargando hasta el infinito</Box> : 
                <CardCarrousellView productos={cards}/>
        }
    </>
}