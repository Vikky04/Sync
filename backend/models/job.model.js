import { application } from "express";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        // require: true
    },
    experienceLevel:{
        type: Number,
        require: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }]
},{timestamps: true});
export const Job = mongoose.model("Job", jobSchema);
