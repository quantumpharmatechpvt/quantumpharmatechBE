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
const OrdersSchema = new dynamoose.Schema(
  { 
    id: {
      "type": Number,
      "hashKey": true
    },
    img:String,
    title: String,
    author:String,
    description: String,
    mrp: String
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);
const CartProductsSchema = new dynamoose.Schema(
  { 
    id: {
      "type": Number,
      "hashKey": true
    },
    img:String,
    title: String,
    author:String,
    description: String,
    mrp: String
  },
  {
    saveUnknown: true,
    timestamps: true,
  }
);
export const user = dynamoose.model("users",usersSchema );
export const orders = dynamoose.model("orders",OrdersSchema );
export const cartProducts = dynamoose.model("cartProducts",CartProductsSchema );