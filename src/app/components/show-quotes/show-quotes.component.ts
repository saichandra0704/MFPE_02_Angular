import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { ConsumerService } from 'src/app/services/consumer.service';
import { PolicyService } from 'src/app/services/policy.service';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-show-quotes',
  templateUrl: './show-quotes.component.html',
  styleUrls: ['./show-quotes.component.css']
})
export class ShowQuotesComponent implements OnInit {

  constructor(
    private loginservice: LoginService, private quotesService: QuotesService, 
    private consumerService: ConsumerService, private policyService: PolicyService) { }

  requestSent = false
  policyIssued = false
  errorMessage = ""
  id = 0
  cb: any = {}
  bVal: number = 0
  pVal: number = 0

  payload = {
    consumerId: 0,
    propertyId: 0,
    amount: 0,
    agentId: "",
    policyMasterId: 0
  }

  response: any = {
    success: false,
    message: "",
    data: {
      policyId: 0
    }
  }

  policyMasterResponse: any = {}

  quotes: Quote[] = []

  ngOnInit(): void {
    
  }

  onClick() {
    this.errorMessage = ""
  }

  IssuePolicy(quote: any){
    this.payload.consumerId = this.id,
    this.payload.propertyId = this.id,
    this.payload.agentId = this.loginservice.GetAgent()
    this.policyService.CreatePolicy(this.payload)
      .subscribe(
        res => {
          this.response = res,
          alert(this.response.message)
          this.policyIssued = true
        },
        err => {
          console.log(err)
          alert("Policy Not Created. Some Error Occured!")
        }
      )
  }

  onSubmit() {
    this.consumerService.GetConsumerBusiness(this.id)
      .subscribe(
        res => {
          if(res == null) {
            this.errorMessage = "Consumer Not Found. Invalid Id!"
          }
          else {
            this.cb = res;
            this.policyService.GetPolicy(this.id).subscribe(res => {if(res != null) this.policyIssued = true})
            this.policyService.GetPolicyMaster(this.id)
              .subscribe(
                res=> {
                  this.policyMasterResponse = res
                  this.bVal = this.policyMasterResponse.businessValue
                  this.pVal = this.policyMasterResponse.propertyValue
                  this.quotesService.GetQuotes(this.bVal, this.pVal)
                    .subscribe(
                      res => {
                        this.quotes = res
                        if (this.quotes.length == 0) {
                          alert("No Quotes Available")
                        }
                        else {
                          this.requestSent = true
                        }
                      },
                      err => {
                        console.log(err)
                        alert("Some Network Error Occured");
                      }
                    ) 
                },
                err => {
                  console.log(err);
                  alert("Either Property or Consumer doesn't exist or doesn't belong to each other!")
                }
              )
          }
        }
      )
    
  }
}
