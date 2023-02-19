package hackaton.dto;

import hackaton.model.Step;
import lombok.Data;

import java.util.List;

@Data
public class StepResponse {
    private List<Step> steps;
    private String error;
}
