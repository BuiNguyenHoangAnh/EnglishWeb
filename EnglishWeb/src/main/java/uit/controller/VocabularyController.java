package uit.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uit.blo.define.IVocabularyBlo;
import uit.dto.TopicDto;
import uit.dto.VocabularyDto;

@RestController
@RequestMapping(value = "views/vocabulary")
@CrossOrigin(origins = "http://localhost:4200")
public class VocabularyController {

	@Autowired
	private IVocabularyBlo vocabularyService;

	@GetMapping(value = "/get-vocabularies-by-topic-id/{id}")
	public ResponseEntity<Set<VocabularyDto>> getVocabulariesByTopicId(@PathVariable String id) {

		ResponseEntity<Set<VocabularyDto>> responseEntity = null;
		
		Set<VocabularyDto> vocabularyDtos = new HashSet<>();
		
		try {
			vocabularyDtos = this.vocabularyService.getVocabularyByTopicId(Integer.parseInt(id));
		} catch (NumberFormatException e) {
			System.out.println("Lỗi khi convert String sang Integer" + id);
		}

		if(vocabularyDtos.isEmpty()) {
			responseEntity = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}else {
			responseEntity = new ResponseEntity<>(vocabularyDtos, HttpStatus.OK);
		}
		
		return responseEntity;
	}
	
	@PostMapping(value = "/get-all-topic")
	public ResponseEntity<Set<TopicDto>> getAllTopic() {
		ResponseEntity<Set<TopicDto>> responseEntity = null;
		
		Set<TopicDto> topicDtos = this.vocabularyService.getAllTopic();
		
		if(!topicDtos.isEmpty()) {
			responseEntity = new ResponseEntity<>(topicDtos, HttpStatus.OK);
		}else {
			responseEntity = new ResponseEntity<>(topicDtos, HttpStatus.BAD_REQUEST);
		}
		
		return responseEntity; 
	}

}
