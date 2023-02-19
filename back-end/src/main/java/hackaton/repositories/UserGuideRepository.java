package hackaton.repositories;

import hackaton.model.GuidePK;
import hackaton.model.UserGuide;
import hackaton.model.UserGuidePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserGuideRepository extends JpaRepository<UserGuide, UserGuidePK> {
    UserGuide findByGideId(GuidePK id);
}