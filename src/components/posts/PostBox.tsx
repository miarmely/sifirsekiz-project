import "./PostBox.css";
import type { ReactNode } from "react";

export default function PostBox({
    children
}: PostBoxProps) {
    const posts = children;

    return (
        <div className="post-box">
            {posts}
        </div>
    );
}

export interface PostBoxProps {
    children: ReactNode
}