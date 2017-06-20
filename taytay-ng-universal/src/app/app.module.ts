import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import {HttpModule} from "@angular/http";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TransferHttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
