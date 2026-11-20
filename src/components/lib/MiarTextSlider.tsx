import "./MiarTextSlider.css";
import { useEffect, useState } from "react";

export interface TextSliderProps {
    textArray: string[],
    slideTimeMs: number
}

export default function TextSlider({
    textArray,
    slideTimeMs
}: TextSliderProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // if "prev + 1" exceeds array than return to "0" again
            setIndex(prev => (prev + 1) % textArray.length);
        }, slideTimeMs);

        // clear "interval" when component unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <span className="miar-text-slider">
            {textArray[index]}
        </span>
    );
}