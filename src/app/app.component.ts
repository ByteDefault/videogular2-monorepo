import { Component } from '@angular/core';
import { VgAPI } from '@videogular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    constructor() {}

    onPlayerReady(api: VgAPI) {
        console.log(api);
    }
}
