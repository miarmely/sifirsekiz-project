import "./MiarVideoPlayer.css";
import { PauseIcon, PlayIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toVideoTime } from "../../lib/MiarTools";
import { observeElement } from "../../lib/MiarScroll";

export default function MiarVideoPlayer({
    type,
    videoSrc,
    thumbnailSrc,
    buttonTextForPlay,
    buttonTextForPause,
    thumbnailTextInHtml,
    isMuted = false,
    autoPlayWhenIntersected = false
}: MiarVideoPlayerProps) {
    const addHoursSection = useRef(false);  // for convert time from "00:00" to "00:00:00" by video duration.
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState("");

    // play/pause video
    const togglePlayback = async (force?: "pause" | "start") => {
        // get video
        const video = videoRef.current;
        if (!video) return;

        // pause video
        if (force !== "start"
            && !video.paused
        ) {
            video.pause();
            return;
        }

        // play video (EXCEPTION-SAFE)
        if (force !== "pause")
            try {
                await video.play();
                setError("");
            }
            catch (ex) {
                setError("Video couldn't play.");
                console.log(ex);
            }
    };

    // set "video observer" (runs just once)
    useEffect(() => {
        // pre-check
        const video = videoRef.current;
        if (!video || !autoPlayWhenIntersected) return;

        // start intersection observer
        const videoObserver = observeElement({
            element: videoRef.current,
            threshold: 0.5,
            onIntersecting: () => togglePlayback("start"),  // play
            onNotIntersecting: () => {
                togglePlayback("pause");  // pause
                video.currentTime = 0; // rollback video to start. (NOT: setCurrentTime() not works in here.)
            }
        });

        // when component unmounted
        return () => {
            videoObserver?.release();
            togglePlayback("pause");
        }
    }, [autoPlayWhenIntersected])

    const videoOverlayForType1 = (
        <div className="video-overlay">
            {!isPlaying &&
                <div className="video-thumbnail-text">
                    {thumbnailTextInHtml &&
                        <div className="description">
                            {thumbnailTextInHtml}
                        </div>
                    }

                    <button
                        className="play-btn  btn-trans  item-shade"
                        onClick={() => togglePlayback()}
                    >
                        {isPlaying ?
                            <>
                                <PauseIcon />
                                <span>{buttonTextForPause}</span>
                            </>
                            :
                            <>
                                <PlayIcon />
                                <span>{buttonTextForPlay}</span>
                            </>
                        }
                    </button>
                </div>
            }

            <div className="video-controls">
                <button
                    className="play-btn  btn-trans"
                    type="button"
                    onClick={() => togglePlayback()}
                >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>

                <div className="video-time">
                    {toVideoTime(currentTime, addHoursSection.current)}
                    <span> / </span>
                    {toVideoTime(duration, addHoursSection.current)}
                </div>

                <input
                    className="video-location"
                    aria-label="Video konumu"
                    type="range"
                    min={0}
                    max={duration}
                    step={0.1}
                    value={currentTime}
                    disabled={duration === 0}
                    onChange={e => {
                        const trgTime = e.currentTarget.valueAsNumber;
                        const video = videoRef.current;
                        if (!trgTime || !video) return;

                        video.currentTime = trgTime;
                        setCurrentTime(trgTime);
                    }}
                />
            </div>

            {error && <p role="alert">{error}</p>}
        </div>
    );

    const videoOverlayForType2 = (
        <div className="video-overlay">
            <div className="video-controls">
                <button
                    className="play-btn  btn-trans"
                    type="button"
                    onClick={() => togglePlayback()}
                >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>

                <div className="video-time">
                    {toVideoTime(currentTime, addHoursSection.current)}
                    <span> / </span>
                    {toVideoTime(duration, addHoursSection.current)}
                </div>

                <input
                    className="video-location"
                    aria-label="Video konumu"
                    type="range"
                    min={0}
                    max={duration}
                    step={0.1}
                    value={currentTime}
                    disabled={duration === 0}
                    onChange={e => {
                        const trgTime = e.currentTarget.valueAsNumber;
                        const video = videoRef.current;
                        if (!trgTime || !video) return;

                        video.currentTime = trgTime;
                        setCurrentTime(trgTime);
                    }}
                />
            </div>

            {error && <p role="alert">{error}</p>}
        </div>
    );

    return (
        <div className="miar-video-player" data-type={type}>
            <video
                ref={videoRef}
                src={videoSrc}
                poster={thumbnailSrc}
                playsInline={true}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                    setIsPlaying(false);
                    setCurrentTime(0);
                }}
                onTimeUpdate={e => setCurrentTime(e.currentTarget.currentTime)}
                onDurationChange={e => {
                    const duration = e.currentTarget.duration;
                    addHoursSection.current = Math.floor(duration / 3600) > 0;  // true == if video time reaches minumum 1 hours.

                    setDuration(Number.isFinite(duration) ? duration : 0);
                }}
                muted={isMuted}
            />

            {type === 1 ? videoOverlayForType1 : videoOverlayForType2}
        </div>
    );
}

/**
 * @param autoPlayWhenIntersected it enable/disable "intersection observer" of MiarVideoPlayer. (When "true", video will "start" when scroll in itself and will "stop" when scroll out itself.)
 */
export interface MiarVideoPlayerProps {
    type: number,  // 1 or 2
    videoSrc: string,
    thumbnailSrc: string,
    buttonTextForPlay?: string,
    buttonTextForPause?: string,
    thumbnailTextInHtml?: React.JSX.Element,
    isMuted?: boolean,
    autoPlayWhenIntersected?: boolean
}