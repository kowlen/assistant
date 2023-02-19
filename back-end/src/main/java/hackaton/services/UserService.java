package hackaton.services;

import hackaton.dto.UserResponse;
import hackaton.model.User;
import hackaton.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Set<User> getUser() {
        return new HashSet<>(userRepository.findAll());
    }

    public UserResponse postUser(String userUri) {
        User user = new User();
        user.setUri(userUri);
        userRepository.save(user);
        return new UserResponse();
    }

    public UserResponse putUser(int userId, String replaceUri) {
        Optional<User> byId = userRepository.findById(userId);
        if (byId.isPresent()) {
            User user = byId.get();
            user.setUri(replaceUri);
            userRepository.save(user);
        }
        return new UserResponse();
    }
}