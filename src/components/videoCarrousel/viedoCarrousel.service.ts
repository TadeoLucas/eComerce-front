import getYouTubeID from 'get-youtube-id';

export const getAllVideos = async () => {
    //aqui hariamos la llamada a backend, de momento lo mockeamos

    const youtubeList = [
        '',
        ''
    ]

    const fetchedVideos = []

    for(const url of youtubeList){
        const id = await getYouTubeID(url)
        fetchedVideos.push({
            id: id,
            url: url,
            title: 'un video 1',
            comments: ''
        })
    }

    return fetchedVideos
}

export const getLastVideo = async () => {
    //llamar al backend
    return Promise.resolve({
        url: 'https://www.youtube.com/...',
        title: 'un video 1',
        comments: ''
    })
}