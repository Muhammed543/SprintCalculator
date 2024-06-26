import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
  export class StoryComponent implements OnInit {

   
   AddStoryForm =new FormGroup({
    storyName  : new FormControl(''),
    storyPoint :new FormControl(''),
     
  });
  constructor() { }

  ngOnInit(): void {
    
  }
  onFormSubmit(){
   window. localStorage.setItem('form-data',JSON.stringify(this.AddStoryForm.value))
    let storydata=JSON.stringify(this.AddStoryForm.value)
    let stories=this.AddStoryForm.value;
    console.log(this.AddStoryForm.value);
  }

  loadData(){
    localStorage.getItem('form-data')
  }

  remove(){
    localStorage.removeItem(this.AddStoryForm.value);

  }

  checkStoryExists():boolean{
    let createdstories=this.AddStoryForm;
    let isStoryExists=false;
    
  if(this.AddStoryForm.storyName==storydata.storyName && this.AddStoryForm.storyPoint==storydata.storyPoint)
    {
      isStoryExists=true;
    }
    return isStoryExists;
}
  }
