import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VgCoreModule } from '../../projects/videogular/core/src/lib/core.module';
import { VgControlsModule } from '../../projects/videogular/controls/src/lib/controls.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        VgCoreModule,
        VgControlsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
