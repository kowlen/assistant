package hackaton.repositories;

import hackaton.model.Message;
import hackaton.model.MessagePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
@Transactional
public interface MessageRepository extends JpaRepository<Message, MessagePK> {
    Set<Message> findByUserIdAndCurrentMessageId(int userId, MessagePK currentMessageId);
}