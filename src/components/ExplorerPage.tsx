import "./ExplorerPage.css";
import type { District } from "../models/Interfaces";
import { SubnavbarMenuBox, type SubnavbarMenuModel } from "./SubnavbarMenu";
import type { Setter } from "../models/Types";
import MiarVideoPlayer from "./lib/MiarVideoPlayer";
import { useState } from "react";

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
                videoSrc="/videos/macahel/macahel-1.MOV"
                thumbnailSrc="/images/macahel/macahel-thumbnail.png"
                buttonTextForPlay="Filmi izle"
                buttonTextForPause="Filmi duraklat"
                thumbnailTextInHtml={
                    <>
                        <h2 className="movie-location-text  movie-shade">
                            <span className="movie-dash"></span>

                            BORÇKA, ARTVİN
                        </h2>

                        <h2 className="movie-main-text  movie-shade">
                            Macahel'e
                        </h2>

                        <h2 className="movie-main-text  movie-shade">
                            yukarıdan bak
                        </h2>
                    </>
                }
            />

            <div className="latest-posts">
                <h2 className="section-title">
                    <div className="vertical-line"></div>
                    Son paylaşımlar
                </h2>

                <SubnavbarMenuBox
                    menus={latestPostsMenus}
                    selectedMenuIndex={selectedLatestPostsMenuIndex}
                    setSelectedMenuIndex={setSelectedLatestPostsMenuIndex}
                    resetPaddingLeftRight={true}
                />
            </div >
        </div >
    );
}

export interface ExplorerPage {
    districts: District[],
    selectedDistrictMenuIndex: number,
    setSelectedDistrictMenuIndex: Setter<number>
}
