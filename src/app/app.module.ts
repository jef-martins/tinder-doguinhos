import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListandoComponent } from './listando/listando.component';


const routes: Routes = [
  { path: "", pathMatch:"full", redirectTo:"home"},
  { path: "home", component: HomeComponent},
  { path: "listando", component: ListandoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListandoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
