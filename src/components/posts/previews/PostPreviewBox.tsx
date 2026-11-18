import "./PostPreviewBox.css";
import type { ReactNode } from "react";

export default function PostPreviewBox({
    children
}: PostPreviewBoxProps) {
    const posts = children;

    return (
        <div className="post-preview-box">
            {posts}
        </div>
    );
}

export interface PostPreviewBoxProps {
    children: ReactNode
}