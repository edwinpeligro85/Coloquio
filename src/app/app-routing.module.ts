import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AdministradorComponent } from './modules/admin/components/administrador/administrador.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'Inicio', component: PrincipalComponent },
  { path: 'Nosotros', component: NosotrosComponent },
  { path: 'Menú', component: MenuComponent },
  { path: 'Reservas', component: ReservasComponent },
  { path: 'Galeria', component: GaleriaComponent },
  { path: 'tablero', component: AdministradorComponent },
  { path: '***', component: PrincipalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes,
  { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }
);
