import {
    mediaList
} from './socialMedia.contants';
import {
    SocialMediaView
} from './socialMedia.view';

const SocialMediaController = () => {

    return (
        <SocialMediaView
            mediaList={mediaList}
        />
    )
}

export {
    SocialMediaController
}