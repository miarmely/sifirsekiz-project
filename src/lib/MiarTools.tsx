export function toVideoTime(
    currentTimeInSec: number,
    addHoursSection: boolean = false,
    dividerSymbol: string = ":"
): string {
    // find seconds
    let sec = Math.floor(currentTimeInSec);

    // find minutes
    let min = sec && Math.floor(sec / 60);
    if (min > 0) sec -= min * 60;

    // find hours 
    const hours = min && Math.floor(min / 60);
    if (hours > 0) min -= hours * 60;

    // padding "0" to start if required
    const paddedSec = sec < 10 ? "0" + sec : sec;
    const paddedMin = min < 10 ? "0" + min : min;
    const paddedHours = hours < 10 ? "0" + hours : hours;

    return addHoursSection ?
        paddedHours + dividerSymbol + paddedMin + dividerSymbol + paddedSec  // ex, 00:00:00
        : paddedMin + dividerSymbol + paddedSec;  // ex 00:00
}