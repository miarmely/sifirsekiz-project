import "./SubnavbarMenu.css";
import type { ReactNode } from "react";
import type { Setter } from "../../models/Types";

export function SubnavbarMenuBox({
    menus,
    selectedMenuIndex,
    setSelectedMenuIndex,
    resetPaddingLeftRight
}: SubnavbarMenuBoxProps) {
    const subnavbarMenus = menus.map((menu, menuIndex) =>
        <SubnavbarMenu
            key={menuIndex}
            index={menuIndex}
            icon={menu.icon}
            menuName={menu.name}
            isSelected={menuIndex === selectedMenuIndex}
            setSelectedMenuIndex={setSelectedMenuIndex}
        />
    );

    const boxStyle = resetPaddingLeftRight ?
        {
            paddingLeft: "0px",
            paddingRight: "0px"
        }
        : {};

    return (
        <nav className="subnavbar"
            style={boxStyle}>
            {subnavbarMenus}
        </nav>
    );
}

export function SubnavbarMenu({
    index,
    icon,
    menuName,
    isSelected,
    setSelectedMenuIndex
}: SubnavbarMenuProps) {
    return (
        <div
            className={"subnavbar-menu " + (isSelected ? "selected" : "")}
            onClick={() => setSelectedMenuIndex(index)}
        >
            {icon && icon}
            <span>{menuName}</span>
        </div>
    );
}


export interface SubnavbarMenuModel {
    index: number,
    icon?: ReactNode,
    name: string
}

export interface SubnavbarMenuBoxProps {
    menus: SubnavbarMenuModel[],
    selectedMenuIndex: number,
    setSelectedMenuIndex: Setter<number>,
    resetPaddingLeftRight?: boolean
}

export interface SubnavbarMenuProps {
    index: number,
    icon?: ReactNode,
    menuName: string,
    isSelected: boolean,
    setSelectedMenuIndex: Setter<number>
}
