import "./MainNavbar.css";
import { MenuIcon } from "lucide-react";
import TextSlider from "./lib/MiarTextSlider";
import type { District } from "../models/Interfaces";

export default function MainNavbar({
    districts
}: NavbarProps) {
    const districtNames = districts.map(d => d.name);

    return (
        <nav className="main-navbar">
            <div className="left">
                <img src="/images/sifirsekiz-logo-circle.svg" />

                <div className="vertical-line" style={{ height: "50px" }}></div>

                <div className="title">
                    <h2>ARTVİN</h2>

                    <h4>
                        <TextSlider
                            textArray={districtNames}
                            slideTimeMs={1500}
                        />
                    </h4>
                </div>
            </div>

            <div className="middle"></div>

            <div className="right">
                <button type="button" className="btn-trans">
                    <MenuIcon />
                </button>
            </div>
        </nav >
    );
}

export interface NavbarProps {
    districts: District[]
}