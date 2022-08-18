import { Component, OnInit } from '@angular/core';
import { PostRequest, PostResponse } from '../../../app/interface/post';
import { PostsService } from '../../../app/services/posts.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public userAllPosts: Array<PostResponse> = [];

  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAll().subscribe(data => {
      this.userAllPosts = data;
      console.log(data);

    })
  }

}
