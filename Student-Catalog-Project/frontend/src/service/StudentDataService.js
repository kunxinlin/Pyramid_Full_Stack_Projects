import axios from "axios";

class StudentDataService{
    retrieveAllStudents(){
        return axios.get(`http://localhost:8080/getAllStudents/`)
    }

    addStudent(card){
        return axios.post(`http://localhost:8080/addStudent/`, card)
    }
   
    updateStudent(card){
        return axios.put(`http://localhost:8080/updateStudent/`, card)
    }

    deleteStudent(id){
        return axios.delete(`http://localhost:8080/deleteStudent/${id}`)
    }
}

export default new StudentDataService();