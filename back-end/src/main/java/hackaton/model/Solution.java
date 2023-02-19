package hackaton.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Solution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    @OneToMany
    private List<Step> steps;
}
