import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    localStorage.removeItem('form-data')
  }

  removeAll(){
    localStorage.clear();
  }
}
