

import mongoose, {Schema} from "mongoose";

const StudentSchema = new Schema({
    studentName: {
        type:String,
        required:true,
        uppercase:true
    },
    gender:{
        type:String,
        required:true,
    },
    adhar:{
        type:String,
        required:true,
    },
    tc: {
        type:String,
        required:true,
    },
    studentHeight:{
        type:String,
        required:true,
    },
    studentWeight:{
        type:String,
        required:true,
    },
    fatherName: {
        type:String,
        required:true,
    },
    fOccupation: {
        type:String,
        required:true,
    },
    fAnnualIncome: {
        type:String,
        required:true,
    },
    motherName: {
        type:String,
        required:true,
        uppercase:true
    },
    mOccupation: {
        type:String,
        required:true,
    },
    religion: {
        type:String,
        required:true,
    },
    caste: {
        type:String,
        required:true,
    },
    cwsn:{
        type:String,
        required:true,
    },
    cwsnType:{
        type:String,
        required:true,
    },
    guardianName:{
        type:String,
        required:true,
    },
    bankName:{
        type:String,
        required:true,
    },
    accNo:{
        type:String,
        required:true,
    },
    ifscCode: {
        type:String,
        required:true,
    },
    micrCode: {
        type:String,
        required:true,
    },
    branchName:{
        type:String,
        required:true,
    },
    branchCode:{
        type:String,
        required:true,
    },
    bloodGroup:{
        type:String,
        required:true,
    },
    nationality:{
        type:String,
        required:true,
    },
    idMark: {
        type:String,
        required:true,
    },
    bpl: {
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    post:{
        type:String,
        required:true,
    },
    ps: {
        type:String,
        required:true,
    },
    block: {
        type:String,
        required:true,
    },
    dist:{
        type:String,
        required:true,
    },
    pinCode: {
        type:String,
        required:true,
    },
    contactNo: {
        type:String,
        required:true,
    },
    admissionClass:{
        type:String,
        required:true,
    },
    firtAdmission:{
        type:String,
        required:true,
    },
    declaration:{
        type:String,
        required:true,
    },
    signOfStudent:{
        type:String,
        required:true,
    },
    signOfGaurdian: {
        type:String,
        required:true,
    },
    signOfHeadMaster: {
        type:String,
        required:true,
    },
    formNo: {
        type:String,
        required:true,
    },
    dateTwo: {
        type:String,
        required:true,
    },
    receivedAppNo: {
        type:String,
        required:true,
    },
    admissionNo: {
        type:String,
        required:true,
    },
    dateThree:{
        type:String,
        required:true,
    },
    studentClas:{
        type:String,
       
    },
    nameTwo: {
        type:String,
        required:true,
    },
    fatherNameTwo:{
        type:String,
        required:true,
    },
    dobTwo: {
        type:String,
        required:true,
    },
    receivedBy:{
        type:String,
        required:true,
    },
    signAuthority:{
        type:String,
        required:true,
    }
},{
    timestamps:true
}
);

export const StudentData = mongoose.model("StudentData",StudentSchema)