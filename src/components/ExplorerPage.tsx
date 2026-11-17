import "./ExplorerPage.css";
import type { District } from "../models/Interfaces";
import { SubnavbarMenuBox, type SubnavbarMenuModel } from "./SubnavbarMenu";
import type { Setter } from "../models/Types";
import MiarVideoPlayer from "./lib/MiarVideoPlayer";
import { useState } from "react";
import VideoPost from "./posts/VideoPost";

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


    return (
        <div id="explorer-page">
            <SubnavbarMenuBox
                menus={explorerPageMenus}
                selectedMenuIndex={selectedDistrictMenuIndex}
                setSelectedMenuIndex={setSelectedDistrictMenuIndex}
            />

            <MiarVideoPlayer
                type={1}
                videoSrc="/videos/artvin/content-1.mp4"
                thumbnailSrc="/images/artvin/content-1.png"
                buttonTextForPlay="Filmi izle"
                buttonTextForPause="Filmi duraklat"
                thumbnailTextInHtml={
                    <>
                        <p className="location-text  item-shade">
                            <span className="movie-dash"></span>

                            MARAL ŞELALESİ, MACAHEL
                        </p>

                        <p className="movie-main-text  item-shade">
                            Artvin'in
                        </p>

                        <p className="movie-main-text  item-shade">
                            eşşiz sonbaharı
                        </p>
                    </>
                }
            />

            <div className="latest-posts">
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

                <div className="content">
                    <VideoPost
                        videoSrc="/videos/artvin/content-2.mp4"
                        thumbnailSrc="/images/artvin/content-2.png"
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-1.mp4"
                        thumbnailSrc="/images/artvin/content-1.png"
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-2.mp4"
                        thumbnailSrc="/images/artvin/content-1.png"
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-1.mp4"
                        thumbnailSrc="/images/artvin/content-2.png"
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-1.mp4"
                        thumbnailSrc="/images/artvin/content-1.png"
                    />

                    <VideoPost
                        videoSrc="/videos/artvin/content-2.mp4"
                        thumbnailSrc="/images/artvin/content-2.png"
                    />
                </div>
            </div >
        </div >
    );
}

export interface ExplorerPage {
    districts: District[],
    selectedDistrictMenuIndex: number,
    setSelectedDistrictMenuIndex: Setter<number>
}
