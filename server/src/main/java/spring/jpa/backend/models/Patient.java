package spring.jpa.backend.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
public class Patient extends Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id ;
    private double poids;

    @OneToMany(mappedBy = "patient")
    private Set<Consultation> consultations;
    public Patient() {

    }


}
