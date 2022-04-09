import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomColorGeneratorComponent } from './random-color-generator/random-color-generator.component';
import { TextDemoComponent } from './text-demo/text-demo.component';

const routes: Routes = [
  { path: '', component: TextDemoComponent },
  { path: 'text', component: TextDemoComponent },
  { path: 'color', component: RandomColorGeneratorComponent },
  { path: 'moreColor', component: RandomColorGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
