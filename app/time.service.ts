import {Injectable} from '@angular/core';

import {Time} from './time';

@Injectable()
export class TimeService {
    getTime() {
        let date: Date = new Date(Date.now());
        let time: Time = new Time(date);
        return Promise.resolve(time);
    }
}
