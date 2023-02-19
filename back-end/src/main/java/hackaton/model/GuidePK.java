package hackaton.model;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToOne;
import java.io.Serializable;

@Data
@Embeddable
public class GuidePK implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    private Chapter chapter;
}
