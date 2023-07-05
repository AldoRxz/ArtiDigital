import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Rutas/home/home.component';
import { HomeUserComponent } from './Rutas/home-user/home-user.component';
import { PerzonalizaComponent } from './Rutas/perzonaliza/perzonaliza.component';
import { ProductsComponent } from './Rutas/products/products.component';
import { CartComponent } from './Rutas/cart/cart.component';
import { FavoritosComponent } from './Rutas/favoritos/favoritos.component';
import { SetProductComponent } from './backend/set-product/set-product.component';
import { MenuComponent } from './Component/menu/menu.component';
import { MenuLoguedComponent } from './Component/menu-logued/menu-logued.component';
import { PortadaComponent } from './Component/portada/portada.component';
import { PersonalizaComponent } from './Component/personaliza/personaliza.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SliderComponent } from './Component/slider/slider.component';
import { TrabajosComponent } from './Component/trabajos/trabajos.component';
import { ServiciosComponent } from './Component/servicios/servicios.component';
import { LoginComponent } from './Component-Auth/login/login.component';
import { RegisterComponent } from './Component-Auth/register/register.component';
import { DatosComponent } from './Component-Auth/datos/datos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeUserComponent,
    PerzonalizaComponent,
    ProductsComponent,
    CartComponent,
    FavoritosComponent,
    SetProductComponent,
    MenuComponent,
    MenuLoguedComponent,
    PortadaComponent,
    PersonalizaComponent,
    FooterComponent,
    SliderComponent,
    TrabajosComponent,
    ServiciosComponent,
    LoginComponent,
    RegisterComponent,
    DatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SwiperModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
