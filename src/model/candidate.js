import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import validator from "validator";

const candidate = new Schema({
  first_name: { type: String, require: [true, "Enter a first name."] },
  last_name: { type: String, require: [true, "Enter a last name."] },
  email: {
    type: String,
    require: [true, "Enter an email address."],
    unique: [true, "This email address is taken."],
    lowercase: true,
    validate: [validator.isEmail, "Enter a valid email address."],
  },
  phone_number: {
    type: Number,
    require: [true, "Enter a phone number."],
  },
  cv: { type: String, require: [true, "Upload a CV."] },
  status: {
    type: String,
    enum: ["pending", "passed", "dropped"],
    default: "pending",
  },
});

candidate.plugin(mongoosePaginate);

export default model("Candidate", candidate);
