import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  parentMessage: string = 'A message coming from the parent hehehe'
  title = 'AngIntro';
  msgFromChild!: string;
  childOutput!: string;

  @ViewChild(PostComponent) childComp;

  constructor(){
    console.log(this.childComp);
  }
  ngAfterViewInit(){
    console.log(this.childComp)
    this.msgFromChild = this.childComp.childMessage;
  }

  receiveMessage($event){
    this.childOutput = $event;
  }
}
