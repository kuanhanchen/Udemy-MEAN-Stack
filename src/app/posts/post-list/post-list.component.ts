import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  // posts = [
  //   { title: "First Post", content: "First Content" },
  //   { title: "Second Post", content: "Second Content" },
  //   { title: "Third Post", content: "Third Content" }
  // ];
  @Input() posts: Post[] = [];
}
