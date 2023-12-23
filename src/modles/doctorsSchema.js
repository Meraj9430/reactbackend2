import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  photo: { type: String },
  password: { type: String },
  registration: { type: String },
  name: { type: String },
  mobile: { type: String },
  email: { type: String },
  qualification: { type: String },
  specialization: {
    type: String,
    enum: [
      "Dermatology",
      "Endocrinologist",
      "Gastroenterology",
      "Oncologist",
      "Pediatrician",
      "Cardiology",
      "Family Medicine",
      "Neurology",
      "Obstettrics and Gynecology",
      "Radiologists",
      "Anesthesiology",
      "Geriatrics",
      "Internal Medicine",
      "Nephrology",
      "Ophthalmology",
      "Psychiatrists",
      "Hospice and palliative medicine",
      "Pulmonologists",
      "Clinical Neurophysiology",
      "Emergency Medicine",
      "Hematology",
      "Inectious disease",
      "Microsurgery",
      "Otolaryngologists",
    ],
  },
  experience: { type: Number },
  gender: { type: String },
  age: { type: Number },
  blood_group: { type: String },

  house_street_no: { type: String },
  colony_locality: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  pincode: { type: String },

  extra_mobile: { type: String },
  languages: { type: String },
  physical_info: { type: String },
  virtual: { type: String },

  medical_registration_proof: { type: String },
  degree_proof: { type: String },
  govt_id_proof: { type: String },

  Upload_Photo: { type: String, enum: [] },
});

export default mongoose.model("Doctor", doctorSchema);
