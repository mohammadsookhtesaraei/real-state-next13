import { Schema, model, models, Document } from "mongoose";

interface UserType extends Document {
  email: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema<UserType>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});


const User=models.User || model("User",userSchema);

export default User;