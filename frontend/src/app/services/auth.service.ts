import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { promise } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private URL = 'http://localhost:3000/api'
  
  constructor(
    private http: HttpClient,
    private router: Router

  ) { }

  signUp(user){
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
  getToken(){
    console.log('*******11111111*********')
    console.log(to)
    var to =  localStorage.getItem('token');
    
    return to;
  }
  localjoder={
    getItem:function(key){
      return Promise.resolve().then(function(){
        var tmr = localStorage.getItem('token');
        console.log('555555555555555555555555555555555')
        console.log(tmr)
        return tmr
      })
    }
  }
  
}
