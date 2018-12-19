import { Team } from './../bean/team';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as sha1 from 'js-sha1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {

  
 
  email = '';
  pwd = '';
  hide = true;
  team: Team;

  constructor(private api: ApiServiceService,public snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
    
  }
  
  login() {
    if (this.email == ''|| this.pwd == '') {
      this.openSnackBar('登陆信息不完整!','关闭');
    } else {
      this.api.login(this.email, sha1(this.pwd)).subscribe(
        result => {
          this.team = result['data'];
          if (!result["status"]) {
            this.openSnackBar('登陆失败!','关闭');
          } else if (this.team.priority <= 1) {
            this.openSnackBar('权限不够!','关闭');
          } else {
            this.openSnackBar('登陆成功!','关闭');
            this.router.navigateByUrl("setCycle") 
          }
        }
      );
    }
    
  }

  /**
   * 显示SnackBar
   * @param message 
   * @param action 
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
