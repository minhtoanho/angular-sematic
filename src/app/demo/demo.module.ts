import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules/modules.component';

import { ModulesModule } from '../modules/modules.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesModule
  ],
  declarations: [ModulesComponent],
  exports: [ModulesComponent]
})
export class DemoModule { }
