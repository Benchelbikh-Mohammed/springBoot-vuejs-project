package spring.jpa.backend.models;

import java.sql.Date;

public class Traitement {
    private long id;
    private String type; // medocs, hospitalisatio, etc
    private Date dateDebut;
    private Date dateFin;
    private String malaise;// maladie detectée
}
