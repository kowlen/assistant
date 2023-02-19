package hackaton.model;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Data
@Entity
public class UserGuide {
    @EmbeddedId
    private UserGuidePK id;
    private boolean completedByUser;
    @OneToOne
    private Step currentStep;
}