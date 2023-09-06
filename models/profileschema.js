import { Schema, model, models } from "mongoose";

const profileschema = new Schema({
  title: {
    require: true,
    type: String,
  },
  describtion: {
    require: true,
    type: String,
  },
  address: {
    require: true,
    type: String,
  },
  phonenumber: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
  whereprofile: {
    require: true,
    type: String,
  },
  constructionDate: {
    require: true,
    type: Date,
   
  },
  categoriy: {
    require: true,
    type: String,
    enum:["vilaa","apartmen","shop","office"]
  },
  rules: {
   default:[],
    type: [String],
  },
  amenities:  {
   default:[],
    type: [String],
  },
  userId : {
  type:Schema.Types.ObjectId,
  ref:"User"

  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updateAt: {
    type: Date,
    default: () => Date.now(),
  },
  published:{
    type:Boolean,
    default:false
  },
});

const Profile = models.Profile || model("Profile",profileschema)
export default Profile
