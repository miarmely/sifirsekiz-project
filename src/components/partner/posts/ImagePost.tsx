import "./ImagePost.css";
import { BookmarkIcon, HeartIcon, MapPinIcon, MessageCircleIcon, SendIcon, TextAlignJustifyStart } from "lucide-react"
import VerifiedBadgeIcon from "../../lib/icons/VerifiedBadgeIcon";
import type { ImagePostDto, PostDto } from "../../../models/PostModels/PostDto";

export default function ImagePost({
    postIndex,
    postDto
}: ImagePostProps) {
    const maxProfileImgCount = 3;  // profile images at "liked by users" area
    const likeCount = postDto.likes.length;
    const media = postDto.media as ImagePostDto;

    return (
        <div
            id={`post-feed-${postIndex}`}
            className="post  img-post  add-cursor"
        >
            <div className="head">
                <img
                    className="profile-img"
                    src={postDto.publishedBy.profileImagePath}
                />

                <div className="username-area">
                    <p className="username  one-line">
                        {postDto.publishedBy.username}
                        <VerifiedBadgeIcon />
                    </p>
                    {/* <p className="song">Koliva - Yüksek Dağlara Doğru</p> */}

                    <p className="location  one-line ">
                        <MapPinIcon className="icon" />
                        {postDto.location.name}
                    </p>
                </div>

                <TextAlignJustifyStart className="details-icon" />
            </div>

            <div className="body">
                <img src={media.imagePath} />
            </div>

            <div className="foot">
                <div className="button-area">
                    <div className="left">
                        <button
                            className="like-btn  one-line  btn-trans"
                            type="button"
                        >
                            <HeartIcon />
                            <span>{postDto.likes.length}</span>
                        </button>

                        <button
                            className="comment-btn  one-line  btn-trans"
                            type="button"
                        >
                            <MessageCircleIcon />
                            <span>{postDto.comments.length}</span>
                        </button>

                        <button
                            className="send-btn  one-line  btn-trans"
                            type="button"
                        >
                            <SendIcon />
                            <span>{postDto.shares.length}</span>
                        </button>
                    </div>

                    <div className="right">
                        <button
                            className="bookmark-btn btn-trans"
                            type="button"
                        >
                            <BookmarkIcon />
                        </button>
                    </div>
                </div>

                {/* liked by users area */}
                {likeCount > 0 &&
                    <div className="liked-by-users-area">
                        <div className="profile-images">
                            {postDto.likes.map((v, i) => {
                                if (i < maxProfileImgCount)
                                    return (
                                        <img
                                            className="profile-img"
                                            key={i}
                                            src={v.likedBy.profileImagePath}
                                        />
                                    );
                            })}
                        </div>

                        <span className="who-liked">
                            <b>{postDto.likes[0].likedBy.username} </b>
                            {likeCount > 1 && <span>ve <b>diğerleri</b> </span>}
                            beğendi.
                        </span>
                    </div>
                }

                <div className="description-area">
                    <span className="username">{postDto.publishedBy.username} </span>
                    <span className="description">{postDto.description}</span>
                </div>

                <div className="date-area">
                    <p className="published-at">{postDto.publishedAt}</p>
                </div>
            </div>
        </div>
    );
}

export interface ImagePostProps {
    postIndex: number,
    postDto: PostDto
}
