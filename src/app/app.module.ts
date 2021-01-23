import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StorycatComponent } from './storycat/storycat.component';
import { StorycatDirective } from './directives/storycat/storycat.directive';


@NgModule({
  declarations: [
    AppComponent,
    DiagnosticsComponent,
    NavBarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StorycatComponent,
    NotfoundComponent,
    StorycatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
