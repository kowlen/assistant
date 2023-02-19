package hackaton.model;

import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Embeddable
public class UserGuidePK implements Serializable {
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    private Guide guide;
}
