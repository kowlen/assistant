package hackaton.repositories;

import hackaton.model.MyFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
@Transactional
public interface FileRepository extends JpaRepository<MyFile, String> {
    Set<MyFile> findByUriAndUserId(int userId, String fileUri);
}