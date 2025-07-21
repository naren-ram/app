// src/app/education.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EducationRequest {
  num: number;
  formType: string;
  employeeAID: string;
  employeeName: string;
  team: string;
  annualContribution: number;
  beneficiaryName: string;
  contactNumber: string;
  courseYearStandard: string;
  educationalInstitution: string;
  location: string;
  requestedAmount: number;
  recommendedAndApproved: boolean;
  ddFavouring: string;
  supportingDocs: string[]; // array of file names/URLs
  justificationForReferral: string;
  headApproved: boolean;
  trusteeApproved: boolean;
  requestedOn: Date;
  approvedOn: Date;
  sentToBankOn: Date;
  ddNumber: string;
  ddDate: Date;
  ddAmount: number;
  remarks: string;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'http://localhost:3000/api/requests';

  constructor(private http: HttpClient) {}

  createRequest(data: EducationRequest): Observable<EducationRequest> {
    return this.http.post<EducationRequest>(this.apiUrl, data);
  }

  getRequests(): Observable<EducationRequest[]> {
    return this.http.get<EducationRequest[]>(this.apiUrl);
  }
}
