package hackaton.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class RegexpSolution {
    @Id
    private RegexpSolutionPK id;
    private double weight;
}