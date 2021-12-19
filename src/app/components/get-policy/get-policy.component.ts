import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-get-policy',
  templateUrl: './get-policy.component.html',
  styleUrls: ['./get-policy.component.css']
})
export class GetPolicyComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  requestSent = false
  errorMessage = ""
  id = 0

  response: any = {}

  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  onSubmit() {
    this.policyService.GetPolicy(this.id)
      .subscribe(
        res => {
          this.response = res
          if (Object.keys(this.response).length == 3) {
            this.errorMessage = "No Policy Found"
          }
          else {
            this.requestSent = true
          }
        },
        err => {
          console.log(err)
          alert("No Policy Found")
        }
      )
  }

}
