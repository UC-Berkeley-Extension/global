/**
 * @module InfoSessionsList
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {InfoSessionsList} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: InfoSessionsList}
    ],
    declarations: [
        InfoSessionsList
    ],
    entryComponents: [
        InfoSessionsList
    ]
})
export class InfoSessionsListModule {}
