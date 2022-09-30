import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './Component/forgot/forgot.component';
import { SigninComponent } from './Component/signin/signin.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetComponent } from './Component/reset/reset.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { TrashComponent } from './Component/trash/trash.component';
import { GetAllNotesComponent } from './Component/getall-notes/getall-notes.component';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';
import { IconComponent } from './Component/icon/icon.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'signin',component:SigninComponent},
  {path:'reset',component:ResetComponent},
 
  {path:'Dashboard',component:DashboardComponent,
  children:[
    {path:'Notes',component:GetAllNotesComponent},
    {path:'Archieve',component:ArchieveComponent},
    {path:'Trash',component:TrashComponent},
    {path:'app-create-note',component:CreateNoteComponent},
    {path:'AddNote',component:CreateNoteComponent},
    {path:'app-icon',component:IconComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }