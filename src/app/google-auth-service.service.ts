import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthServiceService {

  public user: User;

  constructor() { }

  public logIn(googleUser : any): void {
    var profile = googleUser.getBasicProfile();
    this.user = new User();
    this.user.Name = profile.getName();
    this.user.PhotoUrl = profile.getImageUrl();
    this.user.Token = googleUser.getAuthResponse().id_token;

    console.log(this.user);
  }
}
