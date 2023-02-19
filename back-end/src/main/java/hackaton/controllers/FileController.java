package hackaton.controllers;

import hackaton.model.MyFile;
import hackaton.services.FileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
public class FileController {
    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/file{fileUri}")
    public ResponseEntity<String> getFile(@PathVariable String fileUri) {
        return ResponseEntity.ok(fileService.getFile(fileUri));
    }

    @GetMapping("/files")
    public ResponseEntity<Set<MyFile>> getFiles(@RequestParam int userId,
                                                @RequestParam String fileUri) {
        return ResponseEntity.ok(fileService.getFiles(userId, fileUri));
    }

}