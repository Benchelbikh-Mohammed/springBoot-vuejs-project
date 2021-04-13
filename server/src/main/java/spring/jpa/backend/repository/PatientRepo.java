package spring.jpa.backend.repository;

import org.springframework.data.repository.CrudRepository;
import spring.jpa.backend.model.Patient;

public interface PatientRepo extends CrudRepository<Patient,Integer> {
}
