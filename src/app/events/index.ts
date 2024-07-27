import initAcademicDepartmentEvents from "../modules/academicDepartment/academicDepartment.event"
import initAcademicSemesterEvent from "../modules/academicSemester/academicSemester.event"

const subscribeToEvents = () =>{
    initAcademicSemesterEvent()
    initAcademicDepartmentEvents()
    initAcademicDepartmentEvents()
}

export default subscribeToEvents