package hackaton.services;

import hackaton.model.MyFile;
import hackaton.repositories.FileRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class FileService {
    private final FileRepository fileRepository;

    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public String getFile(String fileUri) {
        return fileRepository.findById(fileUri).map(MyFile::getData).orElse(null);
    }

    public Set<MyFile> getFiles(int userId, String fileUri) {
        return fileRepository.findByUriAndUserId(userId, fileUri);
    }
}
