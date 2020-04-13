import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchModule } from './search/search.module';

const routes: Routes =[
  {path: "", loadChildren:() => import("./search/search.module"). then(m => m.SearchModule) }
 ]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})
  ]
  exports: [RouterModule]
})
export class AppRoutingModule { }
