import React from 'react'
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "./VideoFooter.css"
import ticker from "react-ticker"
import Ticker from 'react-ticker';

function VideoFooter({ url, channel, description, song }) {
    return (
        <div class="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}

                    </Ticker>
                </div>
            </div>

            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png"></img>

        </div>
    )
}

export default VideoFooter
