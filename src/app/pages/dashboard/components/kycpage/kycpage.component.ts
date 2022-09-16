import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-kycpage',
  templateUrl: './kycpage.component.html',
  styleUrls: ['./kycpage.component.scss'],
})
export class KycpageComponent implements OnInit {
  preveiwlogo: any;
  httpOption: any;
  logo: any | undefined;

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
    private appcomponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.preveiwlogo = undefined;
    var token = localStorage.getItem('token');
    console.log(token);
    var userToken = 'Bearer ' + token;
    this.httpOption = {
      headers: new HttpHeaders({
        Authorization: userToken,
      }),
    };
  }

  onClickSubmit(data: any) {
    console.log(data);
    console.log("this.logo",this.logo)
    if (
      data.title == '' ||
      data.title == null ||
      data.address_1 == '' ||
      data.address_1 == null ||
      data.address_2 == '' ||
      data.address_2 == null ||
      data.city == '' ||
      data.city == null ||
      data.country == '' ||
      data.country == null ||
      data.zip == '' ||
      data.zip == null ||
      data.birthday == '' ||
      data.birthday == null ||
      data.tex_residence == '' ||
      data.tex_residence == null ||
      data.country_residence == '' ||
      data.country_residence == null ||
      data.primary_citizenship == '' ||
      data.primary_citizenship == null
    ) {
      this.toastr.error('fill the data ');
    } else {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('uploaded_file', this.logo, this.logo.name);
      formData.append('birthday', data.birthday);
      formData.append('tex_residence', data.tex_residence);
      formData.append('country_residence', data.country_residence);
      formData.append('primary_citizenship', data.primary_citizenship);
      formData.append('address_1', data.address_1);
      formData.append('address_2', data.address_2);
      formData.append('city', data.city);
      formData.append('country', data.country);
      formData.append('zip', data.zip);
      console.log(formData)

      this.http
        .post(
          environment.location + 'api/user/userDetails',
          formData,
          this.httpOption
        )
        .subscribe(
          (Response) => {
            console.log('Response', Response);

            var info = JSON.parse(JSON.stringify(Response));

            this.toastr.success('Sucessfully upload profile');
            this.router.navigate(['/user/dashboard']);
          },
          (error) => {
            console.log(error);
            var info = JSON.parse(JSON.stringify(error));
            this.toastr.error(
              error.status === 0
                ? '500 Internal Server Error'
                : !info.error.error
                ? info.error.message
                : info.error.error
            );
          }
        );
    }
  }

  uploadlogo(fileChangeEvent: any) {
    this.logo = fileChangeEvent.target.files[0];
    let reader = new FileReader();
    reader.onload = ($event: any) => {
      this.preveiwlogo = $event.target.result;
      const imageBlob = this.dataURItoBlob(this.preveiwlogo);
      console.log(imageBlob);
      const filename = new File([imageBlob], 'logo', {
        type: 'image/jpeg',
      });
      console.log(filename.name);
    };
    reader.readAsDataURL(fileChangeEvent.target.files[0]);
  }

  //image convert base64
  dataURItoBlob(dataURI: any) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/png',
    });
  }
}
