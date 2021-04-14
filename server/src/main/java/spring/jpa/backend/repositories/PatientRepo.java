package spring.jpa.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import spring.jpa.backend.models.Patient;

public interface PatientRepo extends CrudRepository<Patient,Integer> {
}
