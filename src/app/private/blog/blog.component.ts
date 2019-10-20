import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../shared/rest-api.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Post: any = [];

  constructor(
    public restAPI: RestApiService
    ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    return this.restAPI.getPosts().subscribe((data: {}) => {
      this.Post = data ;
    });
  }

}
