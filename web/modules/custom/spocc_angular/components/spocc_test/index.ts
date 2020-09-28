/**
 * @module SpoccTest
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {SpoccTest} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: SpoccTest}
    ],
    declarations: [
        SpoccTest
    ],
    entryComponents: [
        SpoccTest
    ]
})
export class SpoccTestModule {}
