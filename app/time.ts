export class Time {
    hours: number;
    minutes: number;
    seconds: number;

    constructor(date: Date) {
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    }

    toString() {
        let h = (this.hours < 10 ? '0' : '') + this.hours.toString();
        let m = (this.minutes < 10 ? '0' : '') + this.minutes.toString();
        let s = (this.seconds < 10 ? '0' : '') + this.seconds.toString();
        return (h + ':' + m + ':' + s);
    }

    isNight() {
        return (this.hours > 19 || this.hours < 6);
    }
}
