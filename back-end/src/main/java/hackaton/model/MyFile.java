package hackaton.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class MyFile {
    @Id
    private String uri;
    private String title;
    @Column(columnDefinition = "BINARY", nullable = false)
    private String data;
}