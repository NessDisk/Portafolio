import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import { UnityComponent } from './unity/unity.component';
import { FormsModule } from '@angular/forms';

import { DataService } from './../service/data.service';
import { IndexComponent } from './index/index.component';
import { CardProyectComponent } from './card-proyect/card-proyect.component';
import { TagComponent } from './tag/tag.component';
import { DetailsComponent } from './details/details.component';
import { LinkCompComponent } from './link-comp/link-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    ReactComponent,
    AngularComponent,
    UnityComponent,
    IndexComponent,
    CardProyectComponent,
    TagComponent,
    DetailsComponent,
    LinkCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
   DataService // Agrega el servicio aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
