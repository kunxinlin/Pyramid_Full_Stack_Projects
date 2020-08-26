package com.example.demo.entity;
import javax.persistence.*;

@Entity
@Table(name = "userlogin")
public class UserLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "is_professor")
    private boolean isProfessor;

    public UserLogin(){

    }

    public UserLogin(String email, String password, boolean isProfessor){
        this.email = email;
        this.password = password;
        this.isProfessor = isProfessor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isProfessor() {
        return isProfessor;
    }

    public void setProfessor(boolean isProfessor) {
        this.isProfessor = isProfessor;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", email= \"" + email + '\"' +
                ", password= \"" + password + '\"' +
                ", isProfessor= \"" + isProfessor + '\"' +
                '}';

    }
}