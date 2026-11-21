import "./ExplorerPage.css";
import { useEffect, useState } from "react";
import type { District } from "../models/Interfaces";
import type { Setter } from "../models/Types";
import MiarVideoPlayer from "./lib/MiarVideoPlayer";
import { SubnavbarMenuBox, type SubnavbarMenuModel } from "./partner/SubnavbarMenu";
import PostGridBox from "./partner/posts/previews/PostGridBox";
import VideoGridPost from "./partner/posts/previews/VideoGridPost";
import ImageGridPost from "./partner/posts/previews/ImageGridPost";
import PostBox from "./partner/posts/PostBox";
import ImagePost from "./partner/posts/ImagePost";
import VideoPost from "./partner/posts/VideoPost";
import type { ImagePostDto, LocationDto, PostDto, PostTypeDto, UserDto, VideoPostDto } from "../models/PostModels/PostDto";
import { ArrowLeftIcon } from "lucide-react";

export default function ExplorerPage({
    districts,
    selectedDistrictMenuIndex,
    setSelectedDistrictMenuIndex
}: ExplorerPage) {
    const tabs = {
        main: 0,
        feed: 1
    };

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

    // fake data
    const users: UserDto[] = [
        {
            userId: "1",
            username: "merve.sinankaya",
            profileImagePath: "/images/profile-images/user-1.png"
        },
        {
            userId: "2",
            username: "aleyna3421",
            profileImagePath: "/images/profile-images/user-2.png"
        },
        {
            userId: "3",
            username: "karadenizkizii",
            profileImagePath: "/images/profile-images/user-3.png"
        },
        {
            userId: "4",
            username: "hekimoglu.official",
            profileImagePath: "/images/profile-images/user-4.png"
        },
        {
            userId: "5",
            username: "mert_akdmir",
            profileImagePath: "/images/profile-images/user-4.png"
        },
        {
            userId: "6",
            username: "dogan_akdemir",
            profileImagePath: "/images/profile-images/user-5.png"
        },
    ];

    const postTypes: PostTypeDto[] = [
        { postTypeId: "1", type: "Video" },
        { postTypeId: "2", type: "Image" }
    ]

    const locations: LocationDto[] = [
        { locationId: "1", name: "Lekoban yaylası, Macahel" },
        { locationId: "2", name: "Macahel, Artvin" },
        { locationId: "3", name: "Maral Şelalesi, Macahel" },
        { locationId: "4", name: "Arvin" },
    ]

    const posts: PostDto[] = [
        {
            postId: "1",
            type: postTypes[0],
            media: {
                videoPath: "/videos/artvin/content-2.mp4",
                thumbnailPath: "/images/artvin/content-4.png"
            },
            description: "Artvin iyileştirir.",
            location: locations[0],
            likes: [
                { postLikeId: "1", likedBy: users[0], likedAt: Date.now().toString() },
            ],
            comments: [
                { postCommentId: "1", comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2], commentedAt: Date.now().toString() },
                { postCommentId: "2", comment: "Harika.", commentedBy: users[1], commentedAt: Date.now().toString() },
                { postCommentId: "3", comment: "Muhteşem bir manzara.", commentedBy: users[5], commentedAt: Date.now().toString() },
            ],
            shares: [
                { postShareId: "1", sharedToList: [users[1], users[2]], sharedBy: users[0], sharedAt: Date.now().toString() },
                { postShareId: "2", sharedToList: [users[0], users[2], users[3]], sharedBy: users[1], sharedAt: Date.now().toString() },
                { postShareId: "3", sharedToList: [users[0], users[1], users[3], users[4], users[5]], sharedBy: users[2], sharedAt: Date.now().toString() },
            ],
            bookmarks: [
                { postBookmarkId: "1", bookmarkedBy: users[0], bookmarkedAt: Date.now().toString() },
                { postBookmarkId: "2", bookmarkedBy: users[1], bookmarkedAt: Date.now().toString() },
            ],
            publishedBy: users[0],
            publishedAt: "20 Kasım"
        },
        {
            postId: "2",
            type: postTypes[0],
            media: {
                videoPath: "/videos/artvin/content-1.mp4",
                thumbnailPath: "/images/artvin/content-2.png"
            },
            description: "Artvin iyileştirir.",
            location: locations[1],
            likes: [
                { postLikeId: "1", likedBy: users[1], likedAt: Date.now().toString() },
                { postLikeId: "2", likedBy: users[2], likedAt: Date.now().toString() },
            ],
            comments: [
                { postCommentId: "1", comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2], commentedAt: Date.now().toString() },
                { postCommentId: "2", comment: "Harika.", commentedBy: users[1], commentedAt: Date.now().toString() },
                { postCommentId: "3", comment: "Muhteşem bir manzara.", commentedBy: users[5], commentedAt: Date.now().toString() },
            ],
            shares: [
                { postShareId: "1", sharedToList: [users[1], users[2]], sharedBy: users[0], sharedAt: Date.now().toString() },
                { postShareId: "2", sharedToList: [users[0], users[2], users[3]], sharedBy: users[1], sharedAt: Date.now().toString() },
                { postShareId: "3", sharedToList: [users[0], users[1], users[3], users[4], users[5]], sharedBy: users[2], sharedAt: Date.now().toString() },
            ],
            bookmarks: [
                { postBookmarkId: "1", bookmarkedBy: users[0], bookmarkedAt: Date.now().toString() },
                { postBookmarkId: "2", bookmarkedBy: users[1], bookmarkedAt: Date.now().toString() },
            ],
            publishedBy: users[1],
            publishedAt: "20 Kasım"
        },
        {
            postId: "3",
            type: postTypes[1],
            media: {
                imagePath: "/images/artvin/content-2.png"
            },
            description: "Harika bir anı.",
            location: locations[1],
            likes: [
                { postLikeId: "1", likedBy: users[0], likedAt: Date.now().toString() },
                { postLikeId: "2", likedBy: users[1], likedAt: Date.now().toString() },
                { postLikeId: "3", likedBy: users[2], likedAt: Date.now().toString() },
            ],
            comments: [
                { postCommentId: "1", comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2], commentedAt: Date.now().toString() },
                { postCommentId: "2", comment: "Harika.", commentedBy: users[1], commentedAt: Date.now().toString() },
                { postCommentId: "3", comment: "Muhteşem bir manzara.", commentedBy: users[5], commentedAt: Date.now().toString() },
            ],
            shares: [
                { postShareId: "1", sharedToList: [users[1], users[2]], sharedBy: users[0], sharedAt: Date.now().toString() },
                { postShareId: "2", sharedToList: [users[0], users[2], users[3]], sharedBy: users[1], sharedAt: Date.now().toString() },
                { postShareId: "3", sharedToList: [users[0], users[1], users[3], users[4], users[5]], sharedBy: users[2], sharedAt: Date.now().toString() },
            ],
            bookmarks: [
                { postBookmarkId: "1", bookmarkedBy: users[0], bookmarkedAt: Date.now().toString() },
                { postBookmarkId: "2", bookmarkedBy: users[1], bookmarkedAt: Date.now().toString() },
            ],
            publishedBy: users[2],
            publishedAt: "20 Kasım"
        },
        {
            postId: "4",
            type: postTypes[1],
            media: {
                imagePath: "/images/artvin/content-3.png"
            },
            description: "Harika bir anı.",
            location: locations[1],
            likes: [
                { postLikeId: "1", likedBy: users[0], likedAt: Date.now().toString() },
                { postLikeId: "2", likedBy: users[1], likedAt: Date.now().toString() },
                { postLikeId: "3", likedBy: users[2], likedAt: Date.now().toString() },
                { postLikeId: "4", likedBy: users[3], likedAt: Date.now().toString() }
            ],
            comments: [
                { postCommentId: "1", comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2], commentedAt: Date.now().toString() },
                { postCommentId: "2", comment: "Harika.", commentedBy: users[1], commentedAt: Date.now().toString() },
                { postCommentId: "3", comment: "Muhteşem bir manzara.", commentedBy: users[5], commentedAt: Date.now().toString() },
            ],
            shares: [
                { postShareId: "1", sharedToList: [users[1], users[2]], sharedBy: users[0], sharedAt: Date.now().toString() },
                { postShareId: "2", sharedToList: [users[0], users[2], users[3]], sharedBy: users[1], sharedAt: Date.now().toString() },
                { postShareId: "3", sharedToList: [users[0], users[1], users[3], users[4], users[5]], sharedBy: users[2], sharedAt: Date.now().toString() },
            ],
            bookmarks: [
                { postBookmarkId: "1", bookmarkedBy: users[0], bookmarkedAt: Date.now().toString() },
                { postBookmarkId: "2", bookmarkedBy: users[1], bookmarkedAt: Date.now().toString() },
            ],
            publishedBy: users[3],
            publishedAt: "20 Kasım"
        },
        {
            postId: "5",
            type: postTypes[0],
            media: {
                videoPath: "/videos/artvin/content-4.mp4",
                thumbnailPath: "/images/artvin/content-1.png"
            },
            description: "Artvin'in eşsiz sonbaharı.",
            location: locations[1],
            likes: [
                { postLikeId: "1", likedBy: users[0], likedAt: Date.now().toString() },
                { postLikeId: "2", likedBy: users[1], likedAt: Date.now().toString() },
                { postLikeId: "3", likedBy: users[2], likedAt: Date.now().toString() },
                { postLikeId: "4", likedBy: users[3], likedAt: Date.now().toString() }
            ],
            comments: [
                { postCommentId: "1", comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2], commentedAt: Date.now().toString() },
                { postCommentId: "2", comment: "Harika.", commentedBy: users[1], commentedAt: Date.now().toString() },
                { postCommentId: "3", comment: "Muhteşem bir manzara.", commentedBy: users[5], commentedAt: Date.now().toString() },
            ],
            shares: [
                { postShareId: "1", sharedToList: [users[1], users[2]], sharedBy: users[0], sharedAt: Date.now().toString() },
                { postShareId: "2", sharedToList: [users[0], users[2], users[3]], sharedBy: users[1], sharedAt: Date.now().toString() },
                { postShareId: "3", sharedToList: [users[0], users[1], users[3], users[4], users[5]], sharedBy: users[2], sharedAt: Date.now().toString() },
            ],
            bookmarks: [
                { postBookmarkId: "1", bookmarkedBy: users[0], bookmarkedAt: Date.now().toString() },
                { postBookmarkId: "2", bookmarkedBy: users[1], bookmarkedAt: Date.now().toString() },
            ],
            publishedBy: users[4],
            publishedAt: "20 Kasım"
        },
        {
            postId: "6",
            type: postTypes[0],
            media: {
                videoPath: "/videos/artvin/content-3.mp4",
                thumbnailPath: "/images/artvin/content-3.png"
            },
            description: "Bir ara, bir Artvin mi yapsak?",
            location: locations[3],
            likes: [
                { postLikeId: "1", likedBy: users[0], likedAt: Date.now().toString() },
                { postLikeId: "2", likedBy: users[1], likedAt: Date.now().toString() },
                { postLikeId: "3", likedBy: users[2], likedAt: Date.now().toString() },
                { postLikeId: "4", likedBy: users[3], likedAt: Date.now().toString() }
            ],
            comments: [
                { postCommentId: "1", comment: "Çok güzel bir içerik olmuş.", commentedBy: users[2], commentedAt: Date.now().toString() },
                { postCommentId: "2", comment: "Harika.", commentedBy: users[1], commentedAt: Date.now().toString() },
                { postCommentId: "3", comment: "Muhteşem bir manzara.", commentedBy: users[5], commentedAt: Date.now().toString() },
            ],
            shares: [
                { postShareId: "1", sharedToList: [users[1], users[2]], sharedBy: users[0], sharedAt: Date.now().toString() },
                { postShareId: "2", sharedToList: [users[0], users[2], users[3]], sharedBy: users[1], sharedAt: Date.now().toString() },
                { postShareId: "3", sharedToList: [users[0], users[1], users[3], users[4], users[5]], sharedBy: users[2], sharedAt: Date.now().toString() },
            ],
            bookmarks: [
                { postBookmarkId: "1", bookmarkedBy: users[0], bookmarkedAt: Date.now().toString() },
                { postBookmarkId: "2", bookmarkedBy: users[1], bookmarkedAt: Date.now().toString() },
            ],
            publishedBy: users[5],
            publishedAt: "20 Kasım"
        },
    ];

    const [selectedLatestPostsMenuIndex, setSelectedLatestPostsMenuIndex] = useState(0);
    const [currentTabIndex, setCurrentTabIndex] = useState(tabs.main);
    const [selectedGridPostIndex, setSelectedGridPostIndex] = useState<number>();

    // scroll to selected "feed" or "grid" post
    useEffect(() => {
        if (selectedGridPostIndex === undefined) return;

        // get target "feed" or "grid" post
        let post: HTMLElement | undefined;

        if (currentTabIndex === tabs.feed)
            post = document.querySelector(`#post-feed-${selectedGridPostIndex}`) as HTMLElement;

        else
            post = document.querySelector(`#post-grid-${selectedGridPostIndex}`) as HTMLElement;

        if (!post) return;

        // scroll to post
        post?.scrollIntoView({ behavior: "instant", block: "start" });
        post.focus({ preventScroll: true });
    }, [currentTabIndex])

    return (
        <div id="explorer-page">
            {currentTabIndex === tabs.main &&
                <>
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

                        <PostGridBox>
                            {posts.map((p, i) => {
                                if (p.type.postTypeId === "1")
                                    return <VideoGridPost
                                        key={i}
                                        postIndex={i}
                                        thumbnailSrc={(p.media as VideoPostDto).thumbnailPath}
                                        currentTabIndex={tabs.feed}
                                        setCurrentTabIndex={setCurrentTabIndex}
                                        selectedGridPostIndex={selectedGridPostIndex}
                                        setSelectedGridPostIndex={setSelectedGridPostIndex}
                                    />

                                if (p.type.postTypeId === "2")
                                    return <ImageGridPost
                                        key={i}
                                        postIndex={i}
                                        imgSrc={(p.media as ImagePostDto).imagePath}
                                        currentTabIndex={tabs.feed}
                                        setCurrentTabIndex={setCurrentTabIndex}
                                        selectedGridPostIndex={selectedGridPostIndex}
                                        setSelectedGridPostIndex={setSelectedGridPostIndex}
                                    />
                            })}
                        </PostGridBox>
                    </div>
                </>
            }

            {currentTabIndex === tabs.feed &&
                <div className="latest-posts-feed">
                    <div className="head">
                        <h2 className="title-section">
                            <ArrowLeftIcon
                                className="exit-page  add-cursor"
                                onClick={() => setCurrentTabIndex(tabs.main)}
                            />

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
                        {posts.map((p, i) => {
                            if (p.type.postTypeId === "1")
                                return <VideoPost
                                    key={i}
                                    postIndex={i}
                                    postDto={p}
                                    autoPlayWhenIntersected={true}
                                />

                            if (p.type.postTypeId === "2")
                                return <ImagePost
                                    key={i}
                                    postIndex={i}
                                    postDto={p}
                                />
                        })}
                    </PostBox>
                </div>
            }
        </div >
    );
}

export interface ExplorerPage {
    districts: District[],
    selectedDistrictMenuIndex: number,
    setSelectedDistrictMenuIndex: Setter<number>
}
