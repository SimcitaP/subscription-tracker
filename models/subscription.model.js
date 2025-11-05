import  Mongoose  from "mongoose"; 

const subscriptionSchema = new Mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Subscription name is required'], 
    trim: true,
    minlength: [2, 'Subscription name must be at least 3 characters long'],
    maxlength: [100, 'Subscription name must be at most 50 characters long']
   },
   price:{
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number']
   },
   currency:{
    type: String,
    required: [true, 'Currency is required'],
    enum: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'],
    default: 'USD'
   },
   frequency:{
    type: String,
    required: [true, 'Frequency is required'],
    enum: ['monthly', 'yearly', 'weekly', 'daily'],
    default: 'monthly'
   },
   paymentMethod:{
    type: String,
    required: [true, 'Payment method is required'],
    trim: true
   },
    status: { 
    type: String, 
    enum: ["active", "canceled", "paused", "expired"], 
    default: "active" 
},
   startDate: { 
    type: Date, 
    required: true,
    validate:{
        validator: (value) => value <= new Date(),
        message: 'Start date cannot be in the future'
    } 
    },
    renewalDate:{
        type: Date,
        required: true,
        validate:{
            validator: (value) => value > this.startDate,
        message: 'Renewal date must be after the start date'
    }
    },
    user:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }},
   { timestamps: true });

//
//auto calculate a renewal date if required
subscriptionSchema.pre('save', function(next) {
    if(!this.renewalDate){
        const renewalDate = {
            dalily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalDate[this.frequency]);
    }

    //auto update status if renewal date s passed
    if(this.renewalDate <= new Date()){
        this.status = 'expired';
    }
    next();
});

const Subscription = Mongoose.model("Subscription", subscriptionSchema);

export default Subscription;