export function observeElement({
    element,
    threshold,
    onIntersecting,
    onNotIntersecting
}: ObserveElementProps) {
    if (!element) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            // if intersecting
            if (entry.isIntersecting &&
                entry.intersectionRatio >= threshold)
                onIntersecting();

            // if not intersecting
            else
                onNotIntersecting();
        },
        { threshold }
    );

    observer.observe(element);

    return {
        release: () => {
            observer.disconnect();
        }
    };
}

export interface ObserveElementProps {
    element: HTMLElement | null,
    threshold: number,  // it adjusts when browser calls the observer function. Ex: 0.0 ... 1.0;
    onIntersecting: () => void,
    onNotIntersecting: () => void
}