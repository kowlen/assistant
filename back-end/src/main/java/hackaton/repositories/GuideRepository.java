package hackaton.repositories;

import hackaton.model.Guide;
import hackaton.model.GuidePK;
import hackaton.model.Step;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
@Transactional
public interface GuideRepository extends JpaRepository<Guide, GuidePK> {
    Guide findGuide(GuidePK id, int userId);
    Set<Step> findSteps(GuidePK id, int userId);
}