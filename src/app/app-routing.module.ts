import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaletteComponent } from './palette/palette.component';
import { DemonstrationComponent } from './demonstration/demonstration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'palettes', component: PaletteComponent },
  { path: 'demonstration/:id', component: DemonstrationComponent },
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
