/**
 * @module VoicesSpotlight
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {VoicesSpotlight} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: VoicesSpotlight}
    ],
    declarations: [
        VoicesSpotlight
    ],
    entryComponents: [
        VoicesSpotlight
    ]
})
export class VoicesSpotlightModule {}
