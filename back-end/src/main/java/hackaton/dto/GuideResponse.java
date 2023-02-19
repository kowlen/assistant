package hackaton.dto;

import hackaton.model.Guide;
import lombok.Data;

import java.util.List;

@Data
public class GuideResponse {
    private List<Guide> guides;
    private String error;
}
