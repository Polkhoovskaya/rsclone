import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './components/content/content.component';

import { HeaderComponent } from './components/main-page/header/header.component';
import { StartScreenComponent } from './components/main-page/start-screen/start-screen.component';
import { ThemeSwitcherComponent } from './components/main-page/theme-switcher/theme-switcher.component';
import { ThemeModule } from './theme/theme.module';
import { CognitiveInfoComponent } from './components/second-screen/cognitive-info/cognitive-info.component';
import { WasteInfoComponent } from './components/second-screen/waste-info/waste-info.component';
import { MapComponent } from './components/map-container/map/map.component';
import { WasteService } from './services/waste.service';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { NewObjectFormComponent } from './components/map-container/new-object-form/new-object-form.component';
import { NewObjectButtonComponent } from './components/map-container/new-object-button/new-object-button.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import {BurgerDirective} from './models/burger.directive';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { FormAuthenticationComponent } from './components/authentication/form-authentication/form-authentication.component';
import { AuthenticationService } from './services/authentication.service';
import { ControlAuthenticationComponent } from './components/authentication/control-authentication/control-authentication.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PwaButtonComponent } from './components/main-page/pwa-button/pwa-button.component';
import { InfoComponent } from './components/info-screen/info/info.component';
import { FooterComponent } from './components/info-screen/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    StartScreenComponent,
    ThemeSwitcherComponent,
    BurgerMenuComponent,
    BurgerDirective,
    MenuButtonComponent,
    CognitiveInfoComponent,
    WasteInfoComponent,
    FormAuthenticationComponent,
    ControlAuthenticationComponent,
    WasteInfoComponent,
    PwaButtonComponent,
    InfoComponent,
    FooterComponent,
    MapComponent,
    NewObjectFormComponent,
    NewObjectButtonComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [FirebaseService, WasteService, AuthenticationService],
  entryComponents: [BurgerMenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
