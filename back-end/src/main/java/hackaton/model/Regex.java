package hackaton.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Regex {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String expression;
}
