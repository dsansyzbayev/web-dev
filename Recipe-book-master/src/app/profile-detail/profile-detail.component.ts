import { Component, OnInit } from '@angular/core';
import { mockUser} from '../mock-users';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  user = mockUser;

  constructor() { }

  ngOnInit(): void {
  }


}
