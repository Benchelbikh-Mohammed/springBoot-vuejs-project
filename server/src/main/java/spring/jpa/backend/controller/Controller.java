package spring.jpa.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.jpa.backend.model.Patient;
import spring.jpa.backend.repository.PatientRepo;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("http://localhost:8080")
@RestController
@RequestMapping("/api")
public class Controller {
    final
    PatientRepo patientRepo;

    public Controller(PatientRepo patientRepo) {
        this.patientRepo = patientRepo;
    }

    @GetMapping("patients")
    public List<Patient> getAll(){
        List<Patient> patients = new ArrayList<>();
        patientRepo.findAll().forEach(patient -> patients.add(patient) );
        return patients;
    }

}
