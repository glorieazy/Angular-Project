// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'; // Import UserDashboardComponent
import { StyledBoxComponent } from './styled-box/styled-box.component'; // Import StyledBoxComponent
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component'; // Import StatusIndicatorComponent


export const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-settings', component: UserSettingsComponent }, // Add this route
  { path: 'user-dashboard', component: UserDashboardComponent }, // Add this route
  { path: 'styled-box', component: StyledBoxComponent }, // Add this route
  { path: 'status-indicator', component: StatusIndicatorComponent }, // Add this route

];
