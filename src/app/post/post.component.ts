import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title: string = "This is a title of a post";
  messageToPostList: string = "This is a message to post list component";
  childMessage: string = 'This is a message from child comp.';
  childOutput: string = 'This is a message from child via Output';

  @Input() fromParent:string = '';

  @Output() messageEmitter = new EventEmitter<string>();

  sendmessage(){
    this.messageEmitter.emit(this.childOutput);
  }
}
