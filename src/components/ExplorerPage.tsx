import "./ExplorerPage.css";
import { useState } from "react";
import type { District } from "../models/Interfaces";
import type { Setter } from "../models/Types";
import MiarVideoPlayer from "./lib/MiarVideoPlayer";
import { SubnavbarMenuBox, type SubnavbarMenuModel } from "./partner/SubnavbarMenu";
import PostPreviewBox from "./partner/posts/previews/PostPreviewBox";
import VideoPreviewPost from "./partner/posts/previews/VideoPreviewPost";
import ImagePreviewPost from "./partner/posts/previews/ImagePreviewPost";
import PostBox from "./partner/posts/PostBox";
import type { PostDetails, UserModel } from "../models/PostDetails";
import ImagePost from "./partner/posts/ImagePost";
import VideoPost from "./partner/posts/VideoPost";


export default function ExplorerPage({
    districts,
    selectedDistrictMenuIndex,
    setSelectedDistrictMenuIndex
}: ExplorerPage) {
    const [selectedLatestPostsMenuIndex, setSelectedLatestPostsMenuIndex] = useState(0);

    // set "explorer page" navbar menus
    const explorerPageMenus: SubnavbarMenuModel[] = districts.map((d, i) => {
        return {
            index: i,
            icon: d.icon,
            name: d.name,
        };
    });

    // set "latest posts" navbar menus
    const latestPostsMenuNames = ["Tümü", "Fotoğraflar", "Filmler"];
    const latestPostsMenus: SubnavbarMenuModel[] = latestPostsMenuNames.map((m, i) => {
        return {
            index: i,
            name: m,
        };
    })

    const users: UserModel[] = [
        {
            username: "merve.sinankaya",
            profileImagePath: "/images/profile-images/user-1.png"
        },
        {
            username: "aleyna3421",
            profileImagePath: "/images/profile-images/user-2.png"
        },
        {
            username: "karadenizkizii",
            profileImagePath: "/images/profile-images/user-3.png"
        },
        {
            username: "hekimoglu.official",
            profileImagePath: "/images/profile-images/user-4.png"
        },
        {
            username: "mert_akdmir",
            profileImagePath: "/images/profile-images/user-4.png"
        },
        {
            username: "dogan_akdemir",
            profileImagePath: "/images/profile-images/user-5.png"
        },
    ];

    const postDetails: PostDetails = {
        owner: users[0],
        location: "Macahel, Artvin",
        description: "Artvin iyileştirir.",
        likes: [
            { likedBy: users[2] },
            { likedBy: users[3] },
            { likedBy: users[2] },
            { likedBy: users[1] },
            { likedBy: users[2] },
            { likedBy: users[3] },
            { likedBy: users[1] },
            { likedBy: users[2] },
            { likedBy: users[3] },
            { likedBy: users[1] },
            { likedBy: users[2] },
            { likedBy: users[3] },
            { likedBy: users[1] },
            { likedBy: users[2] },
            { likedBy: users[3] },
            { likedBy: users[1] },
            { likedBy: users[2] },
            { likedBy: users[3] },
        ],
        comments: [
            { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
            { comment: "Harika.", commentedBy: users[1] },
            { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
            { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
            { comment: "Harika.", commentedBy: users[1] },
            { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
            { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
            { comment: "Harika.", commentedBy: users[1] },
            { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
            { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
            { comment: "Harika.", commentedBy: users[1] },
            { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
            { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
            { comment: "Harika.", commentedBy: users[1] },
            { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
            { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
            { comment: "Harika.", commentedBy: users[1] },
            { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
            { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
            { comment: "Harika.", commentedBy: users[1] },
            { comment: "Muhteşem bir manzara.", commentedBy: users[5] },

        ],
        shareCount: 7,
        publishedAt: "23 Ekim"
    };

    return (
        <div id="explorer-page">
            <div className="promo-video">
                <SubnavbarMenuBox
                    menus={explorerPageMenus}
                    selectedMenuIndex={selectedDistrictMenuIndex}
                    setSelectedMenuIndex={setSelectedDistrictMenuIndex}
                />

                <MiarVideoPlayer
                    type={1}
                    videoSrc="/videos/artvin/content-3.mp4"
                    thumbnailSrc="/images/artvin/content-3.png"
                    buttonTextForPlay="Filmi izle"
                    buttonTextForPause="Filmi duraklat"
                    thumbnailTextInHtml={
                        <>
                            <p className="location-text  item-shade">
                                <span className="movie-dash"></span>

                                Artvin
                            </p>

                            <p className="movie-main-text  item-shade">
                                Bir ara,
                            </p>

                            <p className="movie-main-text  item-shade">
                                bir Artvin mi yapsak?
                            </p>
                        </>
                    }
                />
            </div>

            <div className="latest-posts-grid">
                <div className="head">
                    <h2 className="title-section">
                        <div className="vertical-line"></div>
                        Son paylaşımlar
                    </h2>

                    <SubnavbarMenuBox
                        menus={latestPostsMenus}
                        selectedMenuIndex={selectedLatestPostsMenuIndex}
                        setSelectedMenuIndex={setSelectedLatestPostsMenuIndex}
                        resetPaddingLeftRight={true}
                    />
                </div>

                <PostPreviewBox>
                    <VideoPreviewPost thumbnailSrc="/images/artvin/content-2.png" />
                    <ImagePreviewPost imgSrc="/images/artvin/content-1.png" />
                    <ImagePreviewPost imgSrc="/images/artvin/content-1.png" />
                </PostPreviewBox>
            </div>

            <div className="latest-posts-feed">
                <div className="head">
                    <h2 className="title-section">
                        {/* <ArrowLeftIcon className="exit-page  add-cursor" /> */}
                        <div className="vertical-line"></div>
                        <span>Son paylaşımlar</span>
                    </h2>

                    <SubnavbarMenuBox
                        menus={latestPostsMenus}
                        selectedMenuIndex={selectedLatestPostsMenuIndex}
                        setSelectedMenuIndex={setSelectedLatestPostsMenuIndex}
                        resetPaddingLeftRight={true}
                    />
                </div>

                <PostBox>
                    <VideoPost
                        videoSrc="/videos/artvin/content-2.mp4"
                        thumbnailSrc="/images/artvin/content-4.png"
                        postDetails={{
                            owner: users[5],
                            location: "Macahel, Artvin",
                            description: "Artvin iyileştirir.",
                            likes: [
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                                { likedBy: users[1] },
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                                { likedBy: users[1] },
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                                { likedBy: users[1] },
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                                { likedBy: users[1] },
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                            ],
                            comments: [
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] },

                            ],
                            shareCount: 7,
                            publishedAt: "23 Ekim"
                        }}
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-1.mp4"
                        thumbnailSrc="/images/artvin/content-2.png"
                        postDetails={{
                            owner: users[3],
                            location: "Lekoban yaylası, Macahel",
                            description: "Atabarı türküsünü bir de böyle dinleyin.",
                            likes: [
                                { likedBy: users[0] },
                                { likedBy: users[1] },
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                                { likedBy: users[4] },
                            ],
                            comments: [
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] }
                            ],
                            shareCount: 4,
                            publishedAt: "23 Ekim"
                        }}
                    />

                    <ImagePost
                        imgSrc="/images/artvin/content-2.png"
                        postDetails={postDetails}
                    />

                    <ImagePost
                        imgSrc="/images/artvin/content-3.png"
                        postDetails={postDetails}
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-4.mp4"
                        thumbnailSrc="/images/artvin/content-1.png"
                        postDetails={{
                            owner: users[2],
                            location: "Maral şelalesi, Macahel",
                            description: "Artvin'in eşsiz sonbaharı.",
                            likes: [
                                { likedBy: users[1] },
                                { likedBy: users[2] },
                                { likedBy: users[3] },
                            ],
                            comments: [
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] }
                            ],
                            shareCount: 4,
                            publishedAt: "23 Ekim"
                        }}
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-3.mp4"
                        thumbnailSrc="/images/artvin/content-3.png"
                        postDetails={{
                            owner: users[1],
                            location: "Artvin",
                            description: "Bir ara, bir Artvin mi yapsak?",
                            likes: [
                                { likedBy: users[4] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },
                                { likedBy: users[4] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },
                                { likedBy: users[4] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },
                                { likedBy: users[4] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },
                                { likedBy: users[4] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },
                                { likedBy: users[4] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },
                                { likedBy: users[4] },
                                { likedBy: users[2] },
                                { likedBy: users[1] },

                            ],
                            comments: [
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[5] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Harika.", commentedBy: users[1] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
                                { comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2] },
                                { comment: "Muhteşem bir manzara.", commentedBy: users[3] },
                            ],
                            shareCount: 17,
                            publishedAt: "23 Ekim"
                        }}
                    />
                </PostBox>
            </div >
        </div >
    );
}

export interface ExplorerPage {
    districts: District[],
    selectedDistrictMenuIndex: number,
    setSelectedDistrictMenuIndex: Setter<number>
}
