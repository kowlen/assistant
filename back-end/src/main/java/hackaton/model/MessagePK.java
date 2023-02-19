package hackaton.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Embeddable
public class MessagePK implements Serializable {

    @Basic(optional = false)
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Basic(optional = false)
    @Column(name = "user_id")
    private int user_id;
}
