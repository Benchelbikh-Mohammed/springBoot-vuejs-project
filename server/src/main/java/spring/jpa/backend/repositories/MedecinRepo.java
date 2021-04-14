package spring.jpa.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import spring.jpa.backend.models.Medecin;

public interface MedecinRepo extends CrudRepository<Medecin,Integer> {
}
