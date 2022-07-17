import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { CategoryComponent } from './category'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path : 'contact', component: ContactComponent},
  { path : 'category', component: CategoryComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
