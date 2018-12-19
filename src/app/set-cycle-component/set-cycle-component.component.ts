import { Team } from './../bean/team';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as sha1 from 'js-sha1';
import { Router } from '@angular/router';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { TestCycle } from '../bean/TestCycle';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-set-cycle-component',
  templateUrl: './set-cycle-component.component.html',
  styleUrls: ['./set-cycle-component.component.css']
})
export class SetCycleComponentComponent implements OnInit {

  team: Team;
  cycle = 1;
  cycleList: Array<TestCycle> = [{'testCycleId':999,'testCycleName':'加载中','testCycleDescribe':'加载中','testCycleDate':null}];
  displayedColumns: string[] = ['Email','teamName','lastLoginTime','priority'];
  teamList: Array<Team> = [{'email':'loading...','lastLoginTime':null,'teamName':'loading...','universityId':null,'priority':1,'teamId':null}];

  myControl = new FormControl;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  teamData: Array<Team> = [{'email':'loading...','lastLoginTime':null,'teamName':'loading...','universityId':null,'priority':1,'teamId':null}];
  teamEmail = ""

  constructor(private api: ApiServiceService,public snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
    this.api.checkAuth().subscribe(
      result => {
        this.team = result['data'];
        if (this.team.priority <= 1) {
          this.openSnackBar('权限不够!','关闭');
          this.router.navigateByUrl("") 
        } else {
          this.openSnackBar('权限验证通过!','关闭');
          this.initData();
        }
      }
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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

  /**
   * 初始化数据
   */
  initData() {
    this.api.getAllTestCycle().subscribe(
      result => {
        this.cycleList = result['data'];
        //this.openSnackBar('已获取周期数据'+this.cycleList.length+'条','关闭');
        this.getTeamList(1);
      }
    )
    this.api.getAllTeam().subscribe(
      result => {
        this.teamData = result['data'];
        this.options = new Array();
        for (let i = 0; i < this.teamData.length; i++) {
          this.options.push(this.teamData[i].email);
        }
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      }
    )
  }

  getTeamList(id) {
    this.api.getTeamsForCycle(id).subscribe(
      result => {
        this.teamList = result['data'];
        this.openSnackBar('已获取队伍数据'+this.teamList.length+'条','关闭');
      }
    )
  }

  getTime(timeStamp) {
    var date = new Date(timeStamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds(); 
    return (Y+M+D+h+m+s);
  }

  add() {
    let hasFound = 0;
    for (let i = 0; i < this.teamData.length; i++) {
      if (this.teamData[i].email == this.teamEmail) {
        hasFound = this.teamData[i].teamId;
      }
    }
    if (hasFound == 0) {
      this.openSnackBar('该邮箱未注册!','关闭');
    } else {
      this.api.addTestCycleForTeam(this.cycle + '', hasFound + '').subscribe(
        result => {
          if (!result['status']) {
            this.openSnackBar(result['msg'],'关闭');
          } else {
            this.openSnackBar('成功添加!','关闭');
            this.getTeamList(this.cycle);
          }
        }
      )
    }

  }

}
