import "./ImagePost.css";
import { BookmarkIcon, HeartIcon, MapPinIcon, MessageCircleIcon, SendIcon, TextAlignJustifyStart } from "lucide-react"
import VerifiedBadgeIcon from "../../lib/icons/VerifiedBadgeIcon";
import type { PostDetails } from "../../../models/PostDetails";

export default function ImagePost({
    imgSrc,
    postDetails
}: ImagePostProps) {
    const maxProfileImgCount = 3;  // profile images at "liked by users" area
    const likeCount = postDetails.likes.length;

    return (
        <div className="post  img-post  add-cursor">
            <div className="head">
                <img
                    className="profile-img"
                    src={postDetails.owner.profileImagePath}
                />

                <div className="username-area">
                    <p className="username  one-line">
                        {postDetails.owner.username}
                        <VerifiedBadgeIcon />
                    </p>
                    {/* <p className="song">Koliva - Yüksek Dağlara Doğru</p> */}

                    <p className="location  one-line ">
                        <MapPinIcon className="icon" />
                        {postDetails.location}
                    </p>
                </div>

                <TextAlignJustifyStart className="details-icon" />
            </div>

            <div className="body">
                <img src={imgSrc} />
            </div>

            <div className="foot">
                <div className="button-area">
                    <div className="left">
                        <button
                            className="like-btn  one-line  btn-trans"
                            type="button"
                        >
                            <HeartIcon />
                            <span>{postDetails.likes.length}</span>
                        </button>

                        <button
                            className="comment-btn  one-line  btn-trans"
                            type="button"
                        >
                            <MessageCircleIcon />
                            <span>{postDetails.comments.length}</span>
                        </button>

                        <button
                            className="send-btn  one-line  btn-trans"
                            type="button"
                        >
                            <SendIcon />
                            <span>{postDetails.shareCount}</span>
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
                    <div className="liked-by-users-area one-line">
                        <div className="profile-images">
                            {postDetails.likes.map((v, i) => {
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
                            <b>{postDetails.likes[0].likedBy.username} </b>
                            {likeCount > 1 && <span>ve <b>diğerleri</b> </span>}
                            beğendi.
                        </span>
                    </div>
                }

                <div className="description-area">
                    <span className="username">{postDetails.owner.username} </span>
                    <span className="description">{postDetails.description}</span>
                </div>

                <div className="date-area">
                    <p className="published-at">{postDetails.publishedAt}</p>
                </div>
            </div>
        </div>
    );
}

export interface ImagePostProps {
    imgSrc: string,
    postDetails: PostDetails
}
