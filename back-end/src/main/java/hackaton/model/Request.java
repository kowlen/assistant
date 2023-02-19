package hackaton.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int status;
    @Column(columnDefinition = "DATETIME", nullable = false)
    private Date requestDateTime;
    @OneToOne(optional = false)
    private User user;
    @ManyToOne
    private Template template;
}