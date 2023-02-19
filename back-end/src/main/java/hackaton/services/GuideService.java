package hackaton.services;

import hackaton.dto.GuideResponse;
import hackaton.model.Guide;
import hackaton.model.GuidePK;
import hackaton.model.Step;
import hackaton.model.UserGuide;
import hackaton.repositories.GuideRepository;
import hackaton.repositories.StepRepository;
import hackaton.repositories.UserGuideRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class GuideService {
    private final GuideRepository guideRepository;
    private final UserGuideRepository userGuideRepository;
    private final StepRepository stepRepository;

    public GuideService(GuideRepository guideRepository, UserGuideRepository userGuideRepository, StepRepository stepRepository) {
        this.guideRepository = guideRepository;
        this.userGuideRepository = userGuideRepository;
        this.stepRepository = stepRepository;
    }

    public Set<Guide> getGuides() {
        return new HashSet<>(guideRepository.findAll());
    }

    public Guide getGuide(GuidePK guideId, int userId) {
        return guideRepository.findGuide(guideId, userId);
    }

    public Set<Step> getGuideSteps(GuidePK guideId, int userId) {
        return new HashSet<>(guideRepository.findSteps(guideId, userId));
    }

    public GuideResponse putGuide(GuidePK guideId, int replaceCurrentStep, List<Step> completedSteps) {
        UserGuide byGideId = userGuideRepository.findByGideId(guideId);
        byGideId.setCurrentStep(stepRepository.findById(replaceCurrentStep).orElse(null));
        userGuideRepository.save(byGideId);
        return new GuideResponse();
    }
}
