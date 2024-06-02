import dynamoose from "dynamoose"
const usersSchema = new dynamoose.Schema(
  { 
    id: {
      "type": Number,
      "hashKey": true
    },
    name:String,
    age: Number,
    email:String,
    address: String,
    phoneNo: Number,
    password:String
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);
export const user = dynamoose.model("users",usersSchema );