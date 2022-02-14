import mongoose, { mongo } from "mongoose";
import config from "config";

export interface UserDocument extends mongoose.Document {
  fullName: string;
  phoneNumber: string;
  studentId: string;
  classYear: number;
  gradeNumber: string;
  email: string;
  tshirtSize: string;
  createdAt: Date;
  updatedAt: Date;
}

const registerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    studentId: { type: String, required: true, unique: true },
    classYear: { type: Number, required: true },
    gradeNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tshirtSize: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", registerSchema);

export default UserModel;
