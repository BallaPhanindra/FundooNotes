import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
title:any;
description:any;

constructor(public dialogRef: MatDialogRef<UpdateNotesComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any, private not:NoteServiceService) { }

  ngOnInit(): void {
    console.log(this.data)
     this.title=this.data.title;
     this.description=this.data.description;
  }

  onNoClick(): void {
    this.dialogRef.close();
    let dat={
      title:this.title,
      description:this.description,
      color:'green',
      isPin: false,
      isReminder: false,
      isArchieve: false,
      isTrash: false,
      reminder: "2022-09-28T07:16:08.706Z",
      NoteId: this.data.noteId
    }
    this.not.updateNotes(dat).subscribe((result: any) => console.log(result))
  }

}
