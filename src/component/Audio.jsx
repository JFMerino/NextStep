import React from "react";
import './styles/audio.css';

export const Audio = ({color})=>{
    return (
        <div className="forma">
            <div className="audio-form">
                <div className="play"></div>
                <div className="linea"></div>
                <p className="tiempo">0:24</p>
            </div>
        </div>
    )
}

export default Audio;