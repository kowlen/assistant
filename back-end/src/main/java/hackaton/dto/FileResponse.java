package hackaton.dto;

import hackaton.model.MyFile;
import lombok.Data;

import java.util.List;

@Data
public class FileResponse {
    private String data;
    private List<MyFile> detailedFileData;
    private String error;
}
