import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const applicant = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  cv: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "passed", "dropped"],
    default: "pending",
  },
});

applicant.plugin(mongoosePaginate);

export default model("applicant", applicant);
