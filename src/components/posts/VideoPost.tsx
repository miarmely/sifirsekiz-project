import { PlaySquareIcon } from "lucide-react"
import MiarVideoPlayer from "../lib/MiarVideoPlayer"

export default function VideoPost({
    videoSrc,
    thumbnailSrc
}: VideoPostProps) {
    return (
        <div className="post video-post">
            <MiarVideoPlayer
                type={2}
                videoSrc={videoSrc}
                thumbnailSrc={thumbnailSrc}
            />

            <div className="info">
                <p className="media-type">
                    <PlaySquareIcon />
                </p>
            </div>
        </div>
    );
}

export interface VideoPostProps {
    videoSrc: string,
    thumbnailSrc: string
}