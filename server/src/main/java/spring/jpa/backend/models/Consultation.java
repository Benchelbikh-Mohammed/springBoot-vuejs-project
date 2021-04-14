package spring.jpa.backend.models;

import javax.persistence.*;
import java.sql.Date;
@Entity
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String type;
    private Date date;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    private Patient patient;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "medecin_id", referencedColumnName = "id")
    private Medecin medecin;
    public void setId(Long id) {
        this.id = id;
    }


    public Long getId() {
        return id;
    }
}
