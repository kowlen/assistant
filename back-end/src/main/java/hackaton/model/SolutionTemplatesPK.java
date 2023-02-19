package hackaton.model;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Data
@Embeddable
public class SolutionTemplatesPK implements Serializable {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "solution_id")
    private Solution solution;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "template_id")
    private Template template;
}
