import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';

import { PiComponent } from './pi/pi.component';
import { GaugeComponent } from './gauge/gauge.component';

const routes: Routes = [
  {path:'', redirectTo:'/bar',pathMatch:'full'},
  {path:'bar', component:BarComponent},
  {path:'pi', component:PiComponent},
  {path:'gauge', component:GaugeComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
