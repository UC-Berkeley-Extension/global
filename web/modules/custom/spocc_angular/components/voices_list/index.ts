/**
 * @module VoicesList
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {VoicesList} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: VoicesList}
    ],
    declarations: [
        VoicesList
    ],
    entryComponents: [
        VoicesList
    ]
})
export class VoicesListModule {}
