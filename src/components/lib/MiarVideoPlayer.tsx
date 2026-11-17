import "./MiarVideoPlayer.css";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useRef, useState } from "react";
import { toVideoTime } from "../../lib/MiarTools";

export default function MiarVideoPlayer({
    videoSrc,
    thumbnailSrc,
    buttonTextForPlay,
    buttonTextForPause,
    thumbnailTextInHtml,
    isMuted,
    type
}: MiarVideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const addHoursSection = useRef(false);  // for convert time from "00:00" to "00:00:00" by video duration.
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [error, setError] = useState("");

    const togglePlayback = async () => {
        // get video
        const video = videoRef.current;
        if (!video) return;

        // pause video
        if (!video.paused) {
            video.pause();
            return;
        }

        // play video (EXCEPTION-SAFE)
        try {
            await video.play();
            setError("");
        }
        catch {
            setError("Video couldn't play.");
        }
    };

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
                        onClick={togglePlayback}
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
                    onClick={togglePlayback}
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
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={e => setCurrentTime(e.currentTarget.currentTime)}
                onDurationChange={e => {
                    const duration = e.currentTarget.duration;
                    addHoursSection.current = Math.floor(duration / 3600) > 0;  // true == if video time reaches minumum 1 hours.

                    setDuration(Number.isFinite(duration) ? duration : 0);
                }}
                muted={isMuted === true}
            />

            {type === 1 && videoOverlayForType1}
        </div>
    );
}

export interface MiarVideoPlayerProps {
    videoSrc: string,
    thumbnailSrc: string,
    buttonTextForPlay?: string,
    buttonTextForPause?: string,
    thumbnailTextInHtml?: React.JSX.Element,
    isMuted?: boolean,
    type: number
}