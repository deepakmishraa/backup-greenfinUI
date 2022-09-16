import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  alert: string | undefined;

  constructor(private toastr: ToastrService, private http: HttpClient, private router: Router, private appcomponent: AppComponent) { }

  ngOnInit(): void {

  }

  onClickSubmit(data: any) {

    this.alert = '';
    console.log(data);
    if (
      data.email == null ||
      data.email == '' ||
      data.firstname == '' ||
      data.firstname == null ||
      data.lastname == '' ||
      data.lastname == null ||
      data.password == '' ||
      data.password == null ||
      data.confirmpassword == '' ||
      data.confirmpassword == null
    ) {
      this.toastr.error("fill the Data")
    } else if (data.password == data.confirmpassword) {



      const mainData = {
        name: data.firstname + " " + data.lastname,
        email: data.email,
        password: data.password
      }


      this.http
        .post<any>(environment.location + 'api/user/signup', mainData)
        .subscribe(
          (Response) => {
            console.log(Response)
            var info = JSON.parse(JSON.stringify(Response));
            this.toastr.success(info.message);
            this.router.navigate(['/auth/login']);

          }, error => {
            const info = JSON.parse(JSON.stringify(error));
            this.toastr.error(error.status === 0 ? '500 Internal Server Error' : (info.error.message != '' ? info.error.error : info.error.message));
          }
        );

    } else {
      this.toastr.error("Password not Match")
    }
  }

}
