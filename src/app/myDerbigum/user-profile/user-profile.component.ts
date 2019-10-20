import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/shared/user-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  id = 0;
  user;

  constructor(
    public restAPI: UserApiService
  ) { }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id) {
    return this.restAPI.getUser(id).subscribe((data: {}) => {
      this.user = data;
      // console.log(this.filters);
      console.log(data);
    });
  }

  postUser(id){
    return this.restAPI.postUser(id).subscribe((data: {}) => {
      console.log(data);
    });
  }
}
