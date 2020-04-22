import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }

  username=''
  password=''
  onSubmit()
  {
      if(this.username=="charan22" && this.password=="clouder")
      {
        location.replace("newPage");
       
      }
      
    else
    {
      alert('invalid username & password')
    }
  }

}
