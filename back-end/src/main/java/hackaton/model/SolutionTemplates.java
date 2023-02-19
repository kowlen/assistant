package hackaton.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class SolutionTemplates {
    @Id
    private SolutionTemplatesPK id;
}