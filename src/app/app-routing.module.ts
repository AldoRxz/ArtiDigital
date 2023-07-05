import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Rutas/home/home.component';
import { HomeUserComponent } from './Rutas/home-user/home-user.component';
import { FavoritosComponent } from './Rutas/favoritos/favoritos.component';
import { CartComponent } from './Rutas/cart/cart.component';
import { ProductsComponent } from './Rutas/products/products.component';
import { PerzonalizaComponent } from './Rutas/perzonaliza/perzonaliza.component';
import { SetProductComponent } from './backend/set-product/set-product.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeUserComponent },
  { path: 'favoritos', component:FavoritosComponent},
  { path: 'carrito', component:CartComponent},
  { path: 'productos', component:ProductsComponent},
  { path: 'perzonalisa', component:PerzonalizaComponent},
  { path: 'set-productos', component:SetProductComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
