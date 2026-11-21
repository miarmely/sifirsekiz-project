import { ImageIcon } from "lucide-react";
import type { Setter } from "../../../../models/Types";

export default function ImageGridPost({
    postIndex,
    imgSrc,
    currentTabIndex,
    setCurrentTabIndex,
    selectedGridPostIndex,
    setSelectedGridPostIndex
}: VideoPostProps) {
    const recentlyOpenedClass = postIndex === selectedGridPostIndex ? " recently-opened" : "";

    return (
        <div
            id={"post-grid-" + postIndex}
            className={"post  img-post  add-cursor" + recentlyOpenedClass}
            onClick={() => {
                setSelectedGridPostIndex(postIndex);
                setCurrentTabIndex(currentTabIndex);
            }}
        >
            <img src={imgSrc} />

            <div className="info">
                <p className="media-type">
                    <ImageIcon />
                </p>
            </div>

            {recentlyOpenedClass && <div className="text-on-center">En son bakılan</div>}
        </div>
    );
}

export interface VideoPostProps {
    postIndex: number,
    imgSrc: string,
    currentTabIndex: number,
    setCurrentTabIndex: Setter<number>,
    selectedGridPostIndex: number | undefined,
    setSelectedGridPostIndex: Setter<number | undefined>
}