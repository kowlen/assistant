package hackaton.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Step {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    private Guide guide;
    private String content;
}
