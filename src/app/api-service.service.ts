import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  host = "http://47.92.254.221/";

  constructor(private http: HttpClient) { }

  //登录
  login(email: string, pwd: string) {
    const params = new HttpParams().set("email", email).set("password", pwd);
    return this.http.get(this.host + 'auth/login', { params, withCredentials: true });
  }

  //验证登陆状态
  checkAuth() {
    const params = new HttpParams();
    return this.http.get(this.host + 'api/checkAuth', { params, withCredentials: true });
  }

  //获取周期数据
  getAllTestCycle() {
    const params = new HttpParams();
    return this.http.get(this.host + 'getTestCycle', { params, withCredentials: true });
  }

  getTeamsForCycle(id: string) {
    const params = new HttpParams().set('testCycleId', id);
    return this.http.get(this.host + 'api/getTeamForCycle', { params, withCredentials: true });
  }

  getAllTeam() {
    const params = new HttpParams();
    return this.http.get(this.host + 'api/getAllTeam', { params, withCredentials: true });
  }

  addTestCycleForTeam(cycleId: string, teamId: string) {
    const params = new HttpParams().set('cycleId', cycleId).set('teamId',teamId);
    return this.http.get(this.host + 'api/addTestCycleForTeam', { params, withCredentials: true });  
  }

}
