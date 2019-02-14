import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-token';
  posts: Post[];

  constructor(private postService: DataService){
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(
        (posts)=>this.posts = posts,
        (error)=>console.log(error)
        );
  }
}
