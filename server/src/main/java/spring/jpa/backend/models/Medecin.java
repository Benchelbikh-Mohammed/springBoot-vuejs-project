package spring.jpa.backend.models;

import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.sql.Date;
import java.util.Set;

public class Medecin extends Personne {
    private long id;
    protected Date dateDebut;
    @OneToMany(mappedBy = "medecin")
    private Set<Consultation> consultations;
    @OneToOne(mappedBy = "medecin")
    private Agenda agenda;
}
