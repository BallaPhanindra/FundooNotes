import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { SigninComponent } from './Component/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ForgotComponent } from './Component/forgot/forgot.component';
import {MatButtonModule} from '@angular/material/button';
import { ResetComponent } from './Component/reset/reset.component';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { DisplayNoteComponent } from './Component/display-note/display-note.component';
import { GetAllNotesComponent } from './Component/getall-notes/getall-notes.component';
import { IconComponent } from './Component/icon/icon.component';
import { TrashComponent } from './Component/trash/trash.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { UpdateNotesComponent } from './Component/update-notes/update-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuordServiceService } from './services/AuthGuordServices/auth-guord-service.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    ForgotComponent,
    ResetComponent,
    ArchieveComponent,
    CreateNoteComponent,
    DashboardComponent,
    DisplayNoteComponent,
    GetAllNotesComponent,
    IconComponent,
    TrashComponent,
    UpdateNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [AuthGuordServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }