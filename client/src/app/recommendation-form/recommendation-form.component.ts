import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.css']
})
export class RecommendationFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      AID: [1],
      formType: ['Education-NGO', Validators.required],
      beneficiaryName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      requestedAmount: [null, Validators.required],
      recommendedAndApprovedAmount: [null],
      justification: ['', Validators.required],
      ddFavouring: ['', Validators.required],
      supportingDocs: this.fb.group({
        profileOfNGO: [''],
        requestLetter: [''],
        registrationCertificate: ['']
      })
    });
  }

  submit() {
    if (this.form.valid) {
      this.http.post('http://localhost:5000/api/recommendations', this.form.value)
        .subscribe(response => {
          console.log('Submitted:', response);
        });
    }
  }
}