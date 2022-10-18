import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappydogAboutComponent } from './happydog-about/happydog-about.component';
import { HappydogFoodComponent } from './happydog-food/happydog-food.component';


const routes: Routes = [{
  path:'',
  redirectTo:'food',
  pathMatch:'full'
},
{
  path:'food',
  component: HappydogFoodComponent
},
{
  path:'about',
  component: HappydogAboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
