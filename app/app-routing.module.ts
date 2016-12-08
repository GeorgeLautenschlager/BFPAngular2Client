import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TableTopComponent } from './table-top.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'table-top', component: TableTopComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
