import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: 'Inicio', component: HomeComponent},
  {path: 'Trayectoria', component: TrayectoriaComponent},
  {path: 'Galeria', component: GaleriaComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
