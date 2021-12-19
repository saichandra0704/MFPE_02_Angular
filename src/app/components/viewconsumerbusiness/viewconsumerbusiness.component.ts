import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-viewconsumerbusiness',
  templateUrl: './viewconsumerbusiness.component.html',
  styleUrls: ['./viewconsumerbusiness.component.css']
})
export class ViewconsumerbusinessComponent implements OnInit {

  constructor(
    private consumerService: ConsumerService, 
    private businessService: BusinessService,
    private loginservice: LoginService ) {}

  id : number = 0
  cb : any = {}
  bp: any = {}
  errorMessage = ""
  requestSent = false
  inputDisabled = true
  update = false
  dateType = "text"
  sameAgent = false

  businessess =  [
    {
      value: 0, text: "SoleProprietorship"
    },
    {
      value: 1, text: "Partnership"
    },
    {
      value: 2, text: "LimitedPartnership"
    },
    {
      value: 3, text: "LimitedLiabilityCompany"
    },
    {
      value: 4, text: "Corporation"
    },
    {
      value: 5, text: "NonProfit"
    },
    {
      value: 6, text: "Cooperative"
    }
  ]

 
  response: any = {
    success: false,
    message: "",
    data: {
      id: 0
    }
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.consumerService.GetConsumerBusiness(this.id)
      .subscribe (
        res => {
          if (res == null) {
            this.errorMessage = "Consumer Not Found. Invalid Id";
          }
          else {
            this.errorMessage = ""
            this.requestSent = true
            this.cb = res;
            console.log(this.cb); 
            if(this.loginservice.GetAgent() == this.cb.agentId) {
                this.sameAgent = true
            }
            this.businessService.ViewBusinessProperty(this.id) 
              .subscribe(
                res => this.bp = res
              )
          }
        },
        err => {
          this.requestSent = true
          console.log(err);
        }
      )
  }

  onClick() {
    this.errorMessage = ""
  }
  
  edit() {
    this.inputDisabled = false
    this.update = true
  }

  updateConsumer() {
    
    this.cb.business.businessType = parseInt(this.cb.business.businessType)
    this.consumerService.UpdateConsumerBusiness(this.cb)
      .subscribe(
        res => {
          this.response = res
          // alert(this.response.message)
          this.bp.businessId = this.id
          this.businessService.UpdateBusinessProperty(this.bp)
            .subscribe(
              res => {
                this.response = res
                alert("Consumer Business and Property are updated successfully")
                window.location.reload()
              },
              err => {
                this.response = err
                alert(this.response.message)
                console.log(err)
              }
            )
        },
        err => {
          this.response = err
          alert(this.response.message)
          console.log(err)
        }
      )
  }
}
