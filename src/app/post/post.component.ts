import { Component,OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  postService;
  posts:Post[] = [];
  constructor(private _postService:PostService)
  {
    this.postService = _postService;
  }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo()
  {
    this.postService.getInfo().subscribe(
      (res)=>{
        console.log(res[0].userId);
        this.posts = res;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
