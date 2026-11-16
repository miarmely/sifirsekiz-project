import type { ReactNode } from "react";
import type { Setter } from "../models/Types";

export default function SubnavbarMenu({
    index,
    icon,
    menuName,
    isSelected,
    setSelectedDistrictIndex
}: SubnavbarMenuProps) {

    return (
        <div
            className={"subnavbar-menu " + (isSelected ? "selected" : "")}
            onClick={() => setSelectedDistrictIndex(index)}
        >
            {icon}
            <span>{menuName}</span>
        </div>
    );
}

export interface SubnavbarMenuProps {
    index: number,
    icon: ReactNode,
    menuName: string,
    isSelected: boolean,
    setSelectedDistrictIndex: Setter<number>
}
