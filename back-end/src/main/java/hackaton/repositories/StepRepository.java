package hackaton.repositories;

import hackaton.model.Step;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface StepRepository extends JpaRepository<Step, Integer> {
}