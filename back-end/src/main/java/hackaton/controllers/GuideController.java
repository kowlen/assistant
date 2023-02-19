package hackaton.controllers;

import hackaton.dto.GuideResponse;
import hackaton.model.Guide;
import hackaton.model.GuidePK;
import hackaton.model.Step;
import hackaton.services.GuideService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
public class GuideController {
    private final GuideService guideService;

    public GuideController(GuideService guideService) {
        this.guideService = guideService;
    }

    @GetMapping("/guides")
    public ResponseEntity<Set<Guide>> getGuides() {
        return ResponseEntity.ok(guideService.getGuides());
    }

    @GetMapping("/guide{guideId}")
    public ResponseEntity<Guide> getGuide(@PathVariable GuidePK guideId,
                                          @RequestParam int userId) {
        return ResponseEntity.ok(guideService.getGuide(guideId, userId));
    }

    @GetMapping("/guide{guideId}/steps")
    public ResponseEntity<Set<Step>> getGuideSteps(@PathVariable GuidePK guideId,
                                               @RequestParam int userId) {
        return ResponseEntity.ok(guideService.getGuideSteps(guideId, userId));
    }

    @GetMapping("/guides/general")
    public ResponseEntity<Set<Guide>> getGuidesGeneral() {
        return ResponseEntity.ok(guideService.getGuides());
    }

    @PutMapping("/guide{guideId}")
    public ResponseEntity<GuideResponse> putGuide(@PathVariable GuidePK guideId,
                                                  @RequestParam int userId,
                                                  @RequestParam List<Step> completedSteps) {
        return ResponseEntity.ok(guideService.putGuide(guideId, userId, completedSteps));
    }
}