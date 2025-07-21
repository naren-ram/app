// src/app/education-form/education-form.component.ts
import { Component } from '@angular/core';
import { EducationService, EducationRequest } from '../education.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
})
export class EducationFormComponent {
  formData: EducationRequest = {
    num: 0,
    formType: '',
    employeeAID: '',
    employeeName: '',
    team: '',
    annualContribution: 0,
    beneficiaryName: '',
    contactNumber: '',
    courseYearStandard: '',
    educationalInstitution: '',
    location: '',
    requestedAmount: 0,
    recommendedAndApproved: false,
    ddFavouring: '',
    supportingDocs: [],
    justificationForReferral: '',
    headApproved: false,
    trusteeApproved: false,
    requestedOn: new Date(),
    approvedOn: new Date(),
    sentToBankOn: new Date(),
    ddNumber: '',
    ddDate: new Date(),
    ddAmount: 0,
    remarks: ''
  };

  requests: EducationRequest[] = [];

  constructor(private eduService: EducationService) {}

  submitForm() {
    this.eduService.createRequest(this.formData).subscribe((res) => {
      alert('Submitted!');
      this.formData = {
        ...this.formData,
        num: 0,
        formType: '',
        employeeAID: '',
        employeeName: '',
        team: '',
        annualContribution: 0,
        beneficiaryName: '',
        contactNumber: '',
        courseYearStandard: '',
        educationalInstitution: '',
        location: '',
        requestedAmount: 0,
        recommendedAndApproved: false,
        ddFavouring: '',
        supportingDocs: [],
        justificationForReferral: '',
        headApproved: false,
        trusteeApproved: false,
        requestedOn: new Date(),
        approvedOn: new Date(),
        sentToBankOn: new Date(),
        ddNumber: '',
        ddDate: new Date(),
        ddAmount: 0,
        remarks: ''
      };
      this.loadRequests();
    });
  }

  loadRequests() {
    this.eduService.getRequests().subscribe((data) => (this.requests = data));
  }

  ngOnInit() {
    this.loadRequests();
  }
}
