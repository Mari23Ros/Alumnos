import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { InternalServerComponent } from './Pages/internal-server/internal-server.component';
import { PaginaPrincipalComponent } from './Pages/pagina-principal/pagina-principal.component';

const ROUTES: Routes =[
    {path: 'home', component: PaginaPrincipalComponent},
    {path: '404', component: NotFoundComponent},
    {path: '500', component: InternalServerComponent},
    //comodines para que cualquier otra ruta desconocida redireccione al 'home
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: '/404'}
    //{path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash:true });