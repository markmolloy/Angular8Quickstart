import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';

// services / guards
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuard } from './admin.guard';

//  environment
import { environment } from '../environments/environment';

//  angularfire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//  components
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [{ 
  path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent }
  /*{ path: 'admin-only', component: AdminOnlyComponent, canActivate: [AdminGuard] }*/
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [ AuthService, AuthGuardService, AdminGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
