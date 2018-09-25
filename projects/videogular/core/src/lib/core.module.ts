import { NgModule, Provider } from '@angular/core';
import { VgPlayer } from './vg-player/vg-player';
import { VgMedia } from './vg-media/vg-media';
import { VgCuePoints } from './vg-cue-points/vg-cue-points';
import { VgAPI } from './services/vg-api';
import { VgFullscreenAPI } from './services/vg-fullscreen-api';
import { VgUtils } from './services/vg-utils';
import { VgControlsHidden } from './services/vg-controls-hidden';

export interface BitrateOption {
    qualityIndex: number;
    width: number;
    height: number;
    bitrate: number;
    mediaType: string;
    label?: string;
}

/**
 * @internal
 */
export function coreDirectives() {
    return [
        VgPlayer, VgMedia, VgCuePoints
    ];
}

export function coreServices(): Provider[] {
    return [
        VgAPI, VgFullscreenAPI, VgUtils, VgControlsHidden
    ];
}

@NgModule({
    declarations: coreDirectives(),
    exports: coreDirectives(),
    providers: coreServices()
})
export class VgCoreModule {
}
