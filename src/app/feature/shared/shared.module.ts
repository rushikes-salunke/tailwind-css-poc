import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarMenuComponent } from './side-bar/side-bar-menu/side-bar-menu.component';
import { SideBarSubmenuComponent } from './side-bar/side-bar-submenu/side-bar-submenu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMenuComponent } from './navbar/navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './navbar/navbar-mobile/navbar-mobile.component';
import { NavbarSubmenuComponent } from './navbar/navbar-submenu/navbar-submenu.component';
import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';


@NgModule({
  declarations: [
    SharedComponent,
    SideBarComponent,
    SideBarMenuComponent,
    SideBarSubmenuComponent,
    NavbarComponent,
    NavbarMenuComponent,
    NavbarMobileComponent,
    NavbarSubmenuComponent,
    ProfileMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class SharedModule { }
