package uit;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import uit.entity.Topic;
import uit.entity.Vocabulary;
import uit.repository.TopicRepository;
import uit.repository.VocabularyRepository;

@Component
public class Inititalizer implements CommandLineRunner {

	private final static String PATH = "D:\\Tài liệu\\UIT\\Công nghệ web\\Vocabulary.xlsx";

	@Autowired
	private TopicRepository topicRepository;
	
	@Autowired
	private VocabularyRepository vocabularyRepository;
	
	private static final boolean FLAG = false;
	
	@Override
	public void run(String... args) throws Exception {

		if(FLAG) {
			Workbook workBook = WorkbookFactory.create(new File(PATH));

			for(Sheet sheet : workBook) {
				Topic topic = new Topic(sheet.getSheetName());
				topicRepository.save(topic);
				
				for(Row row : sheet) {
					
					List<String> tempList = new ArrayList<>();
					for (Cell cell : row) {
						tempList.add(cell.toString());
					}
					
					Vocabulary voc = new Vocabulary(topic, tempList.get(0), tempList.get(1));
					vocabularyRepository.save(voc);
				}
			}
			
			System.out.println("Lưu dữ liệu thành công");
			
				
		}
		
	}

}
