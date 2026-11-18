import { ImageIcon } from "lucide-react";

export default function ImagePost({
    imgSrc
}: VideoPostProps) {
    return (
        <div className="post  img-post  add-cursor">
            <img src={imgSrc} />

            <div className="info">
                <p className="media-type">
                    <ImageIcon />
                </p>
            </div>
        </div>
    );
}

export interface VideoPostProps {
    imgSrc: string
}