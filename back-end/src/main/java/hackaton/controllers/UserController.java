package hackaton.controllers;

import hackaton.dto.UserResponse;
import hackaton.model.User;
import hackaton.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<Set<User>> getUser() {
        return ResponseEntity.ok(userService.getUser());
    }

    @PostMapping()
    public ResponseEntity<UserResponse> postUser(@RequestParam String userUri) {
        return ResponseEntity.ok(userService.postUser(userUri));
    }

    @PutMapping()
    public ResponseEntity<UserResponse> putUser(@RequestParam int userId,
                                        @RequestParam String replaceUri) {
        return ResponseEntity.ok(userService.putUser(userId, replaceUri));
    }
}