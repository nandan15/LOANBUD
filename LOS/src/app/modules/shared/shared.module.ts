import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared/shared.component';
import { sharedrouter } from './shared.router';
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    sharedrouter,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    BrowserAnimationsModule 
  ],
  exports:[
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
