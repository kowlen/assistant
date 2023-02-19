package hackaton.controllers;

import hackaton.dto.MessageResponse;
import hackaton.model.Link;
import hackaton.model.Message;
import hackaton.model.MessagePK;
import hackaton.services.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
public class MessageController {
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/messages")
    public ResponseEntity<Set<Message>> getMessages(@RequestParam int userId,
                                                    @RequestParam(defaultValue = "Integer.MAX_VALUE") int count,
                                                    @RequestParam MessagePK currentMessageId) {
        return ResponseEntity.ok(messageService.getMessages(userId, count, currentMessageId));
    }

    @PostMapping("/messages")
    public ResponseEntity<MessageResponse> postMessages(@RequestParam int userId,
                                                        @RequestParam String text,
                                                        @RequestParam List<Link> files) {
        return ResponseEntity.ok(messageService.postMessage(userId, text, files));
    }
}