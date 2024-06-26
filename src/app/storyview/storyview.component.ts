import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-storyview',
  templateUrl: './storyview.component.html',
  styleUrls: ['./storyview.component.css'],
})
export class StoryviewComponent implements OnInit {

  @Input () FormGroup='';
  constructor() { }

  ngOnInit(): void {
  }

}
