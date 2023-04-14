import { Component, OnInit } from '@angular/core';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../authentication/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private authservice: AuthService, private userService: UserService) { }
  ngOnInit(): void {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-meanapp-cwbtl",
      theme: "light",
      showAttribution: false,
      autoRefresh: true,
      showTitleAndDesc: true,
      chartsBackground: "",
      maxDataAge: 1800
    });

    const professionlsBar = sdk.createChart({
      chartId: "6427b4c9-7b15-4ff4-8d28-902c1a31f863",
      autoRefresh: true,
    });

    const professionalsTable = sdk.createChart({
      chartId: '6429c868-1ff2-437f-8769-3a9073c399f4',
      autoRefresh: true,
    });

    const cityDoughnut = sdk.createChart({
      chartId: '6429d444-c505-4de1-829b-cc40eb565c1e',
      autoRefresh: true
    });
    const totalProfessionalsCount = sdk.createChart({
      chartId: '642a38bc-00b2-4dc9-8ff3-64566e3544a0',
      autoRefresh: true
    })
    const targetRegistration = sdk.createChart({
      chartId: '642a4016-dc3b-484f-8456-8544be87eade',
      autoRefresh: true
    })
    cityDoughnut.render(document.getElementById('cityDoughnut'));
    targetRegistration.render(document.getElementById('targetRegistration'));
    professionalsTable.render(document.getElementById('professionalsTable'));
    professionlsBar.render(document.getElementById('professionalsBar'));
    totalProfessionalsCount.render(document.getElementById('professionalsCount'));
    this.iniForm();

  }
  adminRegistration: FormGroup;


  onSubmit() {
    this.authservice.signUp(this.adminRegistration.value.email, this.adminRegistration.value.password).then(
      (credentials) => {
        credentials.user?.updateProfile({ displayName: this.adminRegistration.value.user_name }).then(
          (x) => {
            const user = this.adminRegistration.value;
            user.user_id = credentials.user.uid;
            user.created_at = new Date();
          }).then(() => console.log('Useer Created'));
      });
  }

  private iniForm() {
    this.adminRegistration = new FormGroup({
      'user_name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
    });
  }
}
