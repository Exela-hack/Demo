import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

  }
  user: User = {
    username: '',
    password: ''
  };
  ngOnInit() {
  }
  login(user) {
    if (user.username === 'admin' && user.password === 'admin') {

      this.router.navigateByUrl('admin');
    }
    if (user.username === 'kishor' && user.password === 'kishor') {
      localStorage.setItem('currentteam','TeamKishor');
      this.router.navigateByUrl('user');
    }
    if (user.username === 'sangram' && user.password === 'sangram') {
      localStorage.setItem('currentteam','TeamSangram');
      this.router.navigateByUrl('user');
    }
    if (user.username === 'sandip' && user.password === 'sandip') {
      localStorage.setItem('currentteam','TeamSandip');
      this.router.navigateByUrl('user');
    }
  }


}
