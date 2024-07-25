import { StudentData } from "../models/student.model.js"


const studentRegistration = async(req,res)=>{
    try{


        const { studentName, gender, adhar,tc,studentHeight,studentWeight,fatherName,fOccupation,fAnnualIncome, motherName,
            mOccupation,religion,caste,cwsn,cwsnType,guardianName,bankName,accNo,ifscCode,micrCode,branchName,branchCode,
            bloodGroup,nationality,idMark,bpl,address,post,ps,block,dist,pinCode,contactNo,admissionClass,firtAdmission,
            declaration,signOfStudent,signOfGaurdian,signOfHeadMaster,formNo,dateTwo,receivedAppNo,admissionNo,dateThree,
            studentClas,nameTwo,fatherNameTwo,dobTwo,receivedBy,signAuthority
          } = req.body;

         
          const existingStudent = await StudentData.findOne({adhar});
          if(existingStudent){
            res.status(200).json({
                message: "student already exists"
            })
            console.log("student already exists")
            return null
          }

          const StudentDat = await StudentData.create({
            studentName, gender, adhar,tc,studentHeight,studentWeight,fatherName,fOccupation,fAnnualIncome, motherName,
            mOccupation,religion,caste,cwsn,cwsnType,guardianName,bankName,accNo,ifscCode,micrCode,branchName,branchCode,
            bloodGroup,nationality,idMark,bpl,address,post,ps,block,dist,pinCode,contactNo,admissionClass,firtAdmission,
            declaration,signOfStudent,signOfGaurdian,signOfHeadMaster,formNo,dateTwo,receivedAppNo,admissionNo,dateThree,
            studentClas,nameTwo,fatherNameTwo,dobTwo,receivedBy,signAuthority

          });

          const createdStudent = await StudentData.findById(StudentDat._id);

          if(!createdStudent){
            res.status(400).json({
                message: "data not stored in db"
            })
            return null
          };

          return res.status(200).json({
            message: "data saved in db",
            
          })

       

       
        

         
    }catch(error){
        console.log("error in studentRegistration",error)
    }
}
export {studentRegistration}