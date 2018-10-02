import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  nameCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  username = '';

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.username = '';
  }
}
