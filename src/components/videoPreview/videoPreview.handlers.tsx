
export const onReady = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }  