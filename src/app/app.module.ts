// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { StyledBoxComponent } from './styled-box/styled-box.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component'; // Import StatusIndicatorComponent
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserDashboardComponent,
    StyledBoxComponent,
    StatusIndicatorComponent // Declare StatusIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule, // Import CommonModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
