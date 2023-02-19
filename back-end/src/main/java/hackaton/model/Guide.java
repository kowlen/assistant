package hackaton.model;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Data
@Entity
public class Guide {
    @EmbeddedId
    private GuidePK id;
    private String title;
    private String description;
    private boolean favourite;
}
