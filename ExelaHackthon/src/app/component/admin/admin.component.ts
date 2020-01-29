import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Repository } from 'src/app/model/Reposiroty';

const appheader = {
  headers: new HttpHeaders({ 'Authorization': 'Token 75bcd64405f6366c4bcb36157ae5c8588cab8380' })
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  mockurl = 'https://api.github.com';
  currentevent: string;
  events: string[] = ['Hackathon2020', 'Hackathon2021'];
  teamhackthon2020: string[] = ['TeamKishor', 'TeamSangram', 'TeamSandip'];
  teamhackthon2021: string[] = ['TeamPravin', 'Teamsheetal', 'TeamAshish'];
  teamofcurrentevents: string[] = [];
  // repo: Repository = {
  //   reponame: '',
  //   repohttpurl: '',
  //   reposshurl: '',
  //   repohtmlurl: '',
  //   teamname: '',
  //   eventname: ''

  // };
  repolist: Repository[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  geteventinfo(event) {
    if (event === 'Hackathon2020') {
      this.currentevent = 'Hackathon2020';
      this.teamofcurrentevents = this.teamhackthon2020;
    }
    if (event === 'Hackathon2021') {
      this.currentevent = 'Hackathon2021';
      this.teamofcurrentevents = this.teamhackthon2021;
    }
  }
  createrepository(teamofcurrentevent) {
    const da = {
      'name': teamofcurrentevent + this.currentevent,
      'description': 'This is My first repository',
      'homepage': 'https://github.com',
      'private': false,
      'has_issues': true,
      'has_projects': true,
      'has_wiki': true
    };

    this.http.post(this.mockurl + '/' + 'user' + '/' + 'repos', da, appheader)
      .subscribe((data: any) => {
        console.log(data);
        const repo = {
          reponame: data.name,
          repohttpurl: data.clone_url,
          reposshurl: data.ssh_url,
          repohtmlurl: data.html_url,
          teamname: teamofcurrentevent,
          eventname: this.currentevent,
          repocontents_url: data.repocontents_url,
          url: data.url
        };
        this.repolist.push(repo);
        localStorage.setItem('repolist', JSON.stringify(this.repolist));
      });

  }
}
