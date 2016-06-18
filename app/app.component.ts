import {Component, OnInit} from '@angular/core';

import {TimeService} from './time.service';
import {Time} from './time';

@Component({
    selector: 'ng-time',
    template: `
        <div [class.night]="isNight">
            <h1 [class.night]="isNight">
                {{time}}
            </h1>
        </div>
    `,
    providers: [TimeService]
})

export class AppComponent implements OnInit{
    time: Time;
    isNight: boolean;
    constructor(private timeService: TimeService) {

    }
    getTime() {
        this.timeService.getTime().then(time => {
            this.time = time;
            this.isNight = time.isNight();
        });
    }
    ngOnInit() {
        setInterval(() => this.getTime(), 100);
    }
}
