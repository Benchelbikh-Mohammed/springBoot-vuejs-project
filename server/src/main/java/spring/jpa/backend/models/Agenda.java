package spring.jpa.backend.models;

import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.sql.Date;
import java.sql.Time;

public class Agenda {
    private long id;
    private Time heureDebut;
    private Time heureFin;
    private Date date;
    @OneToOne(mappedBy = "medecin")
    private Medecin medecin;
}
