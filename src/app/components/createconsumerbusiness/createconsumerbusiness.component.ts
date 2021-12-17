import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { BusinessService } from 'src/app/services/business.service';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-createconsumerbusiness',
  templateUrl: './createconsumerbusiness.component.html',
  styleUrls: ['./createconsumerbusiness.component.css']
})
export class CreateconsumerbusinessComponent implements OnInit {

  
  constructor(
    private consumerService: ConsumerService, 
    private businessService: BusinessService, 
    private loginservice: LoginService,
    ) { 
  }

  errorMessage = ""

  ShowCustomerToast = false
  CustomerToastText = ""
  ShowPropertyToast = false
  PropertyToastText = ""


  response: any = {
    success: false,
    message: "",
    data: {
      id: 0
    }
  }

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

  cb: any = {
    "consumerName": "",
    "consumerDOB": "",
    "consumerEmail": "",
    "consumerPan": "",
    "agentId": this.loginservice.GetAgent(),
    "business": {
      "businessName": "",
      "businessType": 0,
      "annualTurnOver": 0,
      "capitalInvested": 0,
      "businesIncorporation": "",
      "totalEmployees": 0
    }
  }

  bp: any = {
    "businesssId": 0,
    "propertyType": 0,
    "buildingSqFt": 0,
    "storeys": 0,
    "propertyAge": 0,
    "costOfAsset": 0,
    "salvageValue": 0
  }

  ngOnInit(): void {
  }

  onClick() {
    this.errorMessage = ""
  }

  CreateConsumer() {
    this.cb.business.businessType = parseInt( this.cb.business.businessType)
    this.consumerService.CreateCustomer(this.cb)
      .subscribe(
        res => {
          this.response = res
          // alert(this.response.message)
          this.bp.businessId = this.response.data.id
          this.businessService.CreateBusinessProperty(this.bp)
            .subscribe(
              res => {
                this.response = res
                alert("Consumer Business and Property are created successfully")
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
          alert(err.error.message)
          this.response = err
          alert(this.response.message)
          console.log(err)
        }
      )
  }

}
