package hackaton.services;

import hackaton.dto.MessageResponse;
import hackaton.model.Link;
import hackaton.model.Message;
import hackaton.model.MessagePK;
import hackaton.repositories.MessageRepository;
import hackaton.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MessageService {
    private final MessageRepository messageRepository;
    private final UserRepository userRepository;

    public MessageService(MessageRepository messageRepository, UserRepository userRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
    }

    public Set<Message> getMessages(int userId, int count, MessagePK currentMessageId) {
        return messageRepository.findByUserIdAndCurrentMessageId(userId, currentMessageId)
                .stream().limit(count).collect(Collectors.toSet());
    }

    public MessageResponse postMessage(int userId, String text, List<Link> files) {
        Message message = new Message();
        message.setFromUser(true);
        message.setUser(userRepository.findById(userId).orElse(null));
        message.setLinks(files);
        message.setText(text);
        messageRepository.save(message);
        return new MessageResponse();
    }
}
