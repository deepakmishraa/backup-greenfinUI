import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alert: string | undefined;

  constructor(private toastr: ToastrService, private http: HttpClient, private router: Router, private appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {

    this.alert = '';
    console.log(data);
    if (
      data.email == '' ||
      data.email == null ||
      data.password == '' ||
      data.password == null
    ) {
      this.toastr.error("fill the data ");
    } else {

      this.http
        .post<any>(environment.location + 'api/user/login', data)
        .subscribe(
          (Response) => {
            var info = JSON.parse(JSON.stringify(Response));
            // console.log(info);
            this.toastr.success("Sucessfully Login");
            this.appcomponent.ngOnInit();
            console.log(info.data.token);
            localStorage.setItem('token', info.data.token);
            localStorage.setItem('user', info.user);
            this.router.navigate(['/user/kyc']);
            // console.log(info.user._id);


          }, error => {
            console.log(error.status);

            const info = JSON.parse(JSON.stringify(error));
            console.log(info)
            this.toastr.error(error.status === 0 ? '500 Internal Server Error' : (info.error.message != '' ? info.error.message : info.error.error));
          }
        );
    }

  }

}
