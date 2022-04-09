import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomColorGeneratorComponent } from './random-color-generator/random-color-generator.component';
import { TextDemoComponent } from './text-demo/text-demo.component';

const routes: Routes = [
  { path: '', component: TextDemoComponent },
  { path: 'text', component: TextDemoComponent },
  { path: 'lightColor', component: RandomColorGeneratorComponent },
  { path: 'darkColor', component: RandomColorGeneratorComponent, data: { dark: true } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
