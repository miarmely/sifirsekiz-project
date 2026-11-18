import { PlaySquareIcon } from "lucide-react"

export default function VideoPost({
    thumbnailSrc
}: VideoPostProps) {
    return (
        <div className="post  video-post  add-cursor">
            <img src={thumbnailSrc} />

            <div className="info">
                <p className="media-type">
                    <PlaySquareIcon />
                </p>
            </div>
        </div>
    );
}

export interface VideoPostProps {
    thumbnailSrc: string
}