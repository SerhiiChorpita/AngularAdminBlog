import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { PostRequest, PostResponse } from '../../../interface/post';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public adminAllPosts: Array<PostResponse> = [];

  public author!: string;
  public title!: string;
  public text!: string;
  public imagePath: string = 'https://www.5.ua/media/pictures/1140x641/206955.jpg?t=1611667197';

  public editStatus: boolean = true;
  public editId!: number;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAll().subscribe(data => {
      this.adminAllPosts = data;
    })
  }

  getPost(): void {
    const newPost = {
      author: this.author,
      title: this.title,
      text: this.text,
      imageUrl: this.imagePath
    }
    this.postsService.create(newPost).subscribe(() => {
      this.getPosts();
      this.reset();
    })
  }
  editPost(post: PostResponse): void {
    this.editId = post.id;
    this.editStatus = false;
    this.author = post.author;
    this.text = post.text;
    this.title = post.title;
  }
  savePost(): void {
    const updatePost = {
      author: this.author,
      title: this.title,
      text: this.text,
      imageUrl: this.imagePath
    }
    this.postsService.update(updatePost, this.editId).subscribe(() => {
      this.getPosts();
      this.reset();
      this.editStatus = true;
    })
  }

  deletePost(post: PostResponse): void {
    if (confirm('Are you sure?')) {
      this.postsService.delete(post.id).subscribe(() => {
        this.getPosts();
      })
    }
  }

  reset() {
    this.author = '';
    this.title = '';
    this.text = '';
  }
}
