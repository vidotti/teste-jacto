import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';


// // import { NovoClienteComponent } from './clientes/novo-cliente/novo-cliente.component';
// import { HomeComponent } from './home';
// import { LoginComponent } from './login';
// // import { ClientesComponent } from './clientes/clientes.component';
// import { AuthGuard } from './_helpers';
// import { LoginVendedorGuard } from './_helpers/login-vendedor.guard';

const routes: Routes = [
    { 
    path: '', component: MoviesComponent, 
    // canActivate: [AuthGuard] 
    },
    // { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
    // { path: 'clientes/cliente', component: NovoClienteComponent, canActivate: [AuthGuard, LoginVendedorGuard] },
    // { path: 'clientes/cliente/:id', component: NovoClienteComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
