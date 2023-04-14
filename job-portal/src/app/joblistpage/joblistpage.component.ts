import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpAthenticationService } from '../signuppage/sign-up-athentication.service';

@Component({
  selector: 'app-joblistpage',
  templateUrl: './joblistpage.component.html',
  styleUrls: ['./joblistpage.component.css']
})
export class JoblistpageComponent {
  
  constructor(public signUpService: SignUpAthenticationService, public router: Router) {
  }
  selectedJobFilterData: any;
  filteredJobLists: any;
  jobLists: any = [
    {
      domainName: 'Java Developer',
      companyName: 'Web Technology pvt.Ltd',
      location: 'Bangalore',
      salary: '14LPA/annum',
      experience: '4',
      skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
    },
    {
      domainName: 'Angular Developer',
      companyName: 'Web Technology pvt.Ltd',
      location: 'Noida',
      salary: '10LPA/annum',
      experience: '3',
      skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
    },
    {
      domainName: '.Net Developer',
      companyName: 'Web Technology pvt.Ltd',
      location: 'Noida',
      salary: '10LPA/annum',
      experience: '3',
      skills: '.NET, AngualrJS, ReactJS, PHP'
    },
    {
      domainName: 'Angular Developer',
      companyName: 'FrontEnd Technology pvt.Ltd',
      location: 'Chennai',
      salary: '12LPA/annum',
      experience: '2',
      skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
    },
    {
      domainName: 'Java Developer',
      companyName: 'FrontEnd Technology pvt.Ltd',
      location: 'Bangalore',
      salary: '13LPA/annum',
      experience: '4',
      skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
    },
    {
      domainName: 'Php Developer',
      companyName: 'FrontEnd Technology pvt.Ltd',
      location: 'Pune',
      salary: '7LPA/annum',
      experience: '3',
      skills: 'MongoDB, Docker, SQL, PHP, Oracle'
    },
    {
      domainName: 'Angular Developer',
      companyName: 'zoho Technology pvt.Ltd',
      location: 'Chennai',
      salary: '7LPA/annum',
      experience: '2',
      skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
    },
    {
      domainName: 'Oracle Developer',
      companyName: 'Web Technology pvt.Ltd',
      location: 'Noida',
      salary: '10LPA/annum',
      experience: '4 years',
      skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
    },
    {
      domainName: '.Net Developer',
      companyName: 'FrontEnd Technology pvt.Ltd',
      location: 'Noida',
      salary: '9LPA/annum',
      experience: '3',
      skills: '.NET, AngualrJS, ReactJS, PHP'
    },
    {
      domainName: 'Angular Developer',
      companyName: 'viewSpot Technology pvt.Ltd',
      location: 'Chennai',
      salary: '8LPA/annum',
      experience: '2',
      skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
    },
    {
      domainName: 'Java Developer',
      companyName: 'viewSpot Technology pvt.Ltd',
      location: 'Bangalore',
      salary: '10LPA/annum',
      experience: '4',
      skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
    },
    {
      domainName: 'Angular Developer',
      companyName: 'viewSpot Technology pvt.Ltd',
      location: 'Bangalore',
      salary: '14LPA/annum',
      experience: '2',
      skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
    },
    {
      domainName: '.Net Developer',
      companyName: 'viewSpot Technology pvt.Ltd',
      location: 'Noida',
      salary: '8LPA/annum',
      experience: '3',
      skills: '.NET, AngualrJS, ReactJS, PHP'
    },
    {
      domainName: 'Angular Developer',
      companyName: 'Web Technology pvt.Ltd',
      location: 'Chennai',
      salary: '6LPA/annum',
      experience: '2',
      skills: 'HTML, CSS, Javascript, Angular 8+, ngrx'
    },
    {
      domainName: 'Java Developer',
      companyName: 'Dev Technology pvt.Ltd',
      location: 'Bangalore',
      salary: '9LPA/annum',
      experience: '4',
      skills: 'Spring boot, MongoDB, Docker, SQL, Oracle'
    },
  ];

  ngOnInit() {
    debugger
    this.selectedJobFilterData = this.signUpService.JobFilterData;
    this.filteredJobLists = this.jobLists.filter((data:any)=>{
      if (data.domainName === this.selectedJobFilterData.domainName && data.location === this.selectedJobFilterData.location && data.experience === this.selectedJobFilterData.experience) {
        return data
      }
    });
    console.log(this.jobLists);
    
    console.log(this.filteredJobLists);
    
    
  }

  applyNowBtnClick(joblist:any) {
    this.signUpService.applyNow(joblist);
    this.router.navigate(['/applyjobs']);
  }
}
