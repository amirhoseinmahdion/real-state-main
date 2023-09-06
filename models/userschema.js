import { models, model, Schema } from "mongoose";

const userschema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type:String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  role:{
    type:String,
    default:"USER"
  },
});

const User = models.User || model("User", userschema);

export default User;
