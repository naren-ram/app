const mongoose = require('mongoose');
const recommendationSchema = new mongoose.Schema({
  ID: Number,
  AID: Number,
  formType: String,
  beneficiaryName: String,
  contactNumber: String,
  supportingDocs: {
    profileOfNGO: String,
    requestLetter: String,
    registrationCertificate: String
  },
  requestedAmount: Number,
  recommendedAndApprovedAmount: Number,
  justification: String,
  ddFavouring: String,
  headApproved: Boolean,
  trusteeApproved: Boolean
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
