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
  bool: boolean = true;

  // ------
  imgUrl: string = 'https://gas-kvas.com/uploads/posts/2023-02/1675470489_gas-kvas-com-p-c-fonovii-risunok-rabochego-stola-1.jpg'

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

  clickBtn(){
    
  }
}
