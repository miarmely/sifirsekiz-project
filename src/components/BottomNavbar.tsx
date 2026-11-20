import "./BottomNavbar.css";
import type { ReactNode } from "react";
import type { Setter } from "../models/Types";

export default function BottomNavbar({
    menus,
    selectedMenuIndex,
    setSelectedMenuIndex
}: BottomNavbarProps) {
    return (
        <nav className="bottom-navbar">
            {menus.map((m, i) =>
                <div
                    className={"menu" + (i === selectedMenuIndex ? " open" : "")}
                    onClick={() => setSelectedMenuIndex(i)}
                >
                    <div>
                        {m.icon}
                        <span className="menu-name">{m.name}</span>
                    </div>

                    <span className="menu-line"></span>
                </div>
            )}
        </nav>
    );
}

export interface BottomNavbarProps {
    menus: BottomNavbarMenu[],
    selectedMenuIndex: number,
    setSelectedMenuIndex: Setter<number>
}

export interface BottomNavbarMenu {
    icon: ReactNode,
    name: string
}