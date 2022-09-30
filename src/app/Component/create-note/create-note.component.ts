import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/noteService/note-service.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  isShow = false;
  title: any;
  description: any;
  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
  }
  show() {
    this.isShow = true;
  }
  close() {
    this.isShow = false;
    console.log(this.title, this.description)
    let data={
      title:this.title,
      description:this.description,
      color:"green"
    }
    this.note.AddNotes(data).subscribe((result: any) => console.log(result))
  }
}