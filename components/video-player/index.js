import Videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import 'video.js/dist/video-js.css';
import {useRef, useEffect} from "react";
import '@videojs/themes/dist/city/index.css';

// Fantasy
import '@videojs/themes/dist/fantasy/index.css';

// Forest
import '@videojs/themes/dist/forest/index.css';

// Sea
import '@videojs/themes/dist/sea/index.css';
const index = ()=>{
    const video = useRef();
    const player = useRef(null);
    const options = {
        autoplay: true,
        controls: true,
        sources: [
            {
                src: '/today/index.m3u8',
                type: 'application/x-mpegURL'
            }
        ],
       fluid: true,
       playbackRates: [0.5,1,1.5,2,2.5]
    }
    const onReady = (player)=>{
         player.hlsQualitySelector = ({
            displayCurrentQuality: true
         });
    }
    useEffect(()=>{
       player.current = Videojs(video.current,options,()=>onReady(player.current));
       return ()=>{
       
        player.current = null;
       }
    },[]);
    const update = ()=>{
    player.current.src({
        src: '/test.mp4',
        type: 'video/mp4'
    });
    }
    const uploadAndChange = (e)=>{
        const input = e.target;
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        player.current.src({
            src: url,
            type: 'video/mp4'
        });
    }
    const design = (
        <>
        <div className="w-6/12 mx-auito">
             <video ref={video} className="video-js vjs-big-play-centered vjs-theme-city" />
        </div>
         { //<button onClick={update}>Update</button>
         // <input type="file" onChange={uploadAndChange} /> 
        }
        </>
    );
    return design;
}
export default index;