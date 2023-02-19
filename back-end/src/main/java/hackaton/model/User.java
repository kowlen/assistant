package hackaton.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String uri;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Message> messages;
    @OneToOne
    private Request request;
}
