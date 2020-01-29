import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/model/Reposiroty';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const appheader = {
  headers: new HttpHeaders({ 'Authorization': 'Token 75bcd64405f6366c4bcb36157ae5c8588cab8380' })
};
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private http: HttpClient) { }
  currentteam: string;
  repolist = [];
  contentlist = [];
  teamrepo = {
    reponame: '',
    repohttpurl: '',
    reposshurl: '',
    repohtmlurl: '',
    teamname: '',
    repocontents_url: '',
    eventname: '',
    url: ''
  };


  ngOnInit() {
    this.currentteam = localStorage.getItem('currentteam');
    this.repolist = JSON.parse(localStorage.getItem('repolist'));
    console.log(this.repolist);
    this.repolist.forEach((repo) => {
      if (repo.teamname === this.currentteam) {
        this.teamrepo = repo;
      }
    });
  }
  getcontent(contentpath) {
    this.contentlist=[];
    this.http.get(contentpath + '/' + 'contents', appheader).subscribe((response: any) => {
      response.forEach(element => {
        let content = {
          "name": element.name,
          "path": element.path,
          "url": element.url,
          "download_url": element.download_url,
          "type": element.type
        }
this.contentlist.push(content);

      });

    });
  }
  getcon(content){
    this.contentlist=[];
    this.http.get(content, appheader).subscribe((response: any) => {
      response.forEach(element => {
        let content = {
          "name": element.name,
          "path": element.path,
          "url": element.url,
          "download_url": element.download_url,
          "type": element.type
        }
this.contentlist.push(content);
console.log(this.contentlist);

      });

    });
  }


}
