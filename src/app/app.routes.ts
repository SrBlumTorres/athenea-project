import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path: 'profile/:id',
        component: UserProfileComponent,
        title: 'User Profile'
      },
      {
        path: 'new-user',
        component: NewUserComponent,
        title: 'New User'
      }
    ]
  },
  { path: "**", redirectTo: "/" }
];
