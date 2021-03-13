import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';



@NgModule({
  declarations: [ListPageComponent, DetailsPageComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
