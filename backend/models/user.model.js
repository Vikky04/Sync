import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        enum: ['student', 'recruiter'],
        require: true
    },
    profile:{
        bio: {type: String},
        skills: [{type: String}],
        resume: {type: String},
        resumeOrgName: {type: String},
        company: {type: mongoose.Schema.Types.ObjectId, ref: 'company'},
        profilePhoto: {
            type: String,
            default: ""
        }
    }
},{timestamps:true});
export const User = mongoose.model('User', userSchema);