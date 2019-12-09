import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MenuComponent } from './menu/menu.component';
import { ReservasComponent } from './reservas/reservas.component';
import { GaleriaComponent } from './galeria/galeria.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'Inicio', component: PrincipalComponent },
  { path: 'Nosotros', component: NosotrosComponent },
  { path: 'Menú', component: MenuComponent },
  { path: 'Reservas', component: ReservasComponent },
  { path: 'Galeria', component: GaleriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes,
  { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }
);
