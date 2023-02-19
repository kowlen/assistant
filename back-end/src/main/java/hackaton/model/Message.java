package hackaton.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class Message {
    @EmbeddedId
    private MessagePK id;
    @MapsId(value = "user_id")
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private User user;
    private String text;
    @OneToMany
    private List<Link> links;
    private boolean fromUser;
    @Column(columnDefinition = "DATETIME", nullable = false)
    private Date sendTime;
    @ManyToOne()
    @JoinColumn(name = "request_id", referencedColumnName = "id")
    private Request currentRequest;
}
