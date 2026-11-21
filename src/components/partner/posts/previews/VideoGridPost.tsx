import { PlaySquareIcon } from "lucide-react"
import type { Setter } from "../../../../models/Types";

export default function VideoGridPost({
    postIndex,
    thumbnailSrc,
    currentTabIndex,
    setCurrentTabIndex,
    selectedGridPostIndex,
    setSelectedGridPostIndex
}: VideoPostProps) {
    const recentlyOpenedClass = postIndex === selectedGridPostIndex ? " recently-opened" : "";

    return (
        <div
            id={"post-grid-" + postIndex}
            className={"post  video-post  add-cursor" + recentlyOpenedClass}
            onClick={() => {
                setSelectedGridPostIndex(postIndex);
                setCurrentTabIndex(currentTabIndex);
            }}
        >
            <img src={thumbnailSrc} />

            <div className="info">
                <p className="media-type">
                    <PlaySquareIcon />
                </p>
            </div>

            {recentlyOpenedClass && <div className="text-on-center">En son izlenen</div>}
        </div>
    );
}

export interface VideoPostProps {
    postIndex: number,
    thumbnailSrc: string,
    currentTabIndex: number,
    setCurrentTabIndex: Setter<number>,
    selectedGridPostIndex: number | undefined,
    setSelectedGridPostIndex: Setter<number | undefined>
}