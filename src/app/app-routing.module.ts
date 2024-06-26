import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { SprintComponent } from './sprint/sprint.component';
import { StoryviewComponent } from './storyview/storyview.component';

const routes: Routes = [
  {path:'story', component:StoryComponent},
  {path:'sprint', component:SprintComponent},
  {path:'storyview', component:StoryviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
