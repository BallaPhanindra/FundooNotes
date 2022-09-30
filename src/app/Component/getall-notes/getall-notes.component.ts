import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';

@Component({
  selector: 'app-getall-notes',
  templateUrl: './getall-notes.component.html',
  styleUrls: ['./getall-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteList: any;
  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){

    this.note.getNoteList().subscribe((result: any) => {
      console.log(result);
      this.noteList = result.noteList
    })
}
receiveMessage($event:any) {
  this.getAllNotes()
  console.log($event)
}

}