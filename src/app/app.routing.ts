import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
    { 
    path: '', component: MoviesComponent, 
    // canActivate: [AuthGuard] 
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
