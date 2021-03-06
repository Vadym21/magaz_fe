import { Component } from '@angular/core';
import {CommunicationService} from '../communication-module/communication.service';
import {HttpService} from '../http.service';

export class User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registraion.component.css'],
  providers: [HttpService]
})
export class RegistrationComponent {

  user: User;
  done   = false;
  token: string;
  feedback: any;


  constructor(private httpService: CommunicationService) {
    this.feedback = {
      mess: null
    };
    this.user = {
      name: '',
      email : '',
      password : ''
    };
  }



  regUser() {
    const user = this.user;
    this.httpService.regUser(user).subscribe((data: any) => {
      console.dir(data);
      this.token = data.token;
      this.done = true;
      console.log(this.done);
      console.log(this.token);
      localStorage.setItem(this.user.email, this.token);

      if (data.success) {
        this.feedback.mess = 1;
        this.feedback.user = data.user;
      } else if (!data.success) {
        this.feedback.mess = 2;
      }
    });
  }

  closeRegistrationAnswer() {
    this.done = false;
    this.user = {
      name: '',
      email : '',
      password : ''
    };
  }
}
