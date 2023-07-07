import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  loans: loans = new loans;

  loan_result: string = "";

  repayment_result: string = "";

  onInit(){
    this.loans = {
      price: 0,
      downpayment: 0,
      repaymenttime: 0,
      interestrate: 0
    }
  }

  onSubmit(loans:NgForm){
    console.log(this.loans.price);
    
    this.loan_result = `Total amount of loan : ${this.loans.price - this.loans.downpayment}`;
    console.log(this.loan_result);
    
    this.repayment_result = `Interest rate of each month : ${this.loans.price + this.loans.interestrate / this.loans.repaymenttime}`;

  }
  
}

export class loans {
  price = 0;
  downpayment = 0;
  repaymenttime = 0;
  interestrate = 0;
}

