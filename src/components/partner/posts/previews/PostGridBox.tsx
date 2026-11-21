import "./PostGridBox.css";
import type { ReactNode } from "react";

export default function PostGridBox({
    children
}: PostPreviewBoxProps) {
    const posts = children;

    return (
        <div className="post-grid-box">
            {posts}
        </div>
    );
}

export interface PostPreviewBoxProps {
    children: ReactNode
}