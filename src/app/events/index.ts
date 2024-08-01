import initAcademicDepartmentEvents from "../modules/academicDepartment/academicDepartment.event"
import initAcademicFacultyEvents from "../modules/academicFaculty/academicFaculty.event"
import initAcademicSemesterEvent from "../modules/academicSemester/academicSemester.event"

const subscribeToEvents = () =>{
    initAcademicSemesterEvent()
    initAcademicDepartmentEvents()
    initAcademicFacultyEvents()
}

export default subscribeToEvents