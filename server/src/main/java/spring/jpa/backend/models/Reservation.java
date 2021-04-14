package spring.jpa.backend.models;

import java.sql.Time;
import java.sql.Date;

public class Reservation {
    private long id;
    private Date date;
    private Date dateConsultation;
    private Time heure;
    private String typeConsultation;

}
