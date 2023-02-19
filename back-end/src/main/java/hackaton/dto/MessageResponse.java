package hackaton.dto;

import hackaton.model.Message;
import lombok.Data;

import java.util.List;

@Data
public class MessageResponse {
    private List<Message> messages;
    private String error;
}
