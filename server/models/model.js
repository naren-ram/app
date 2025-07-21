
const mongoose = require('mongoose');

const referralFormSchema = new mongoose.Schema({
  num: Number,
  formType: String,
  employeeAID: String,
  employeeName: String,
  team: String,
  annualContribution: Number,
  beneficiaryName: String,
  contactNumber: String,
  courseYearStandard: String,
  educationalInstitution: String,
  location: String,
  requestedAmount: Number,
  recommendedAndApproved: Boolean,
  ddFavouring: String,
  supportingDocs: [String],
  justificationForReferral: String,
  headApproved: Boolean,
  trusteeApproved: Boolean,
  requestedOn: Date,
  approvedOn: Date,
  sentToBankOn: Date,
  ddNumber: String,
  ddDate: Date,
  ddAmount: Number,
  remarks: String
}, {
  timestamps: true 
});

module.exports = mongoose.model('ReferralForm', referralFormSchema);
