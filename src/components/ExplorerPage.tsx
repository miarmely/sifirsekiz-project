import "./ExplorerPage.css";
import type { District } from "../models/Interfaces";
import SubnavbarMenu from "./SubnavbarMenu";
import type { Setter } from "../models/Types";
import MiarVideoPlayer from "./lib/MiarVideoPlayer";
import { FileX } from "lucide-react";

export default function ExplorerPage({
    districts,
    selectedDistrictIndex,
    setSelectedDistrictIndex
}: ExplorerPage) {
    const subnavbarMenus = districts.map((d, i) =>
        <SubnavbarMenu
            key={i}
            index={i}
            icon={d.icon}
            menuName={d.name}
            isSelected={i === selectedDistrictIndex}
            setSelectedDistrictIndex={setSelectedDistrictIndex}
        />
    );

    return (
        <div id="explorer-page">
            <div className="subnavbar">
                {subnavbarMenus}
            </div>

            <div className="latest-posts">
                <MiarVideoPlayer
                    videoSrc="/videos/macahel/macahel-1.MOV"
                    thumbnailSrc="/images/macahel/drone-video-cover-image.jpg"
                    buttonTextForPlay="Filmi izle"
                    buttonTextForPause="Filmi duraklat"
                    thumbnailTextInHtml={
                        <>
                            <p className="movie-location-text  movie-shade">
                                <span className="movie-dash"></span>

                                BORÇKA, ARTVİN
                            </p>

                            <p className="movie-main-text  movie-shade">
                                Macahel'e
                            </p>

                            <p className="movie-main-text  movie-shade">
                                yukarıdan bak
                            </p>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export interface ExplorerPage {
    districts: District[],
    selectedDistrictIndex: number,
    setSelectedDistrictIndex: Setter<number>
}
