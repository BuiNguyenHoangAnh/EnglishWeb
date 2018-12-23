package uit.converter;

import org.springframework.stereotype.Component;

import uit.dto.VocabularyDto;
import uit.entity.Vocabulary;

@Component
public class VocabularyConverter implements BaseConverter<Vocabulary, VocabularyDto>{

	@Override
	public void convertEntityToDto(Vocabulary entity, VocabularyDto dto) {
		if(entity == null || dto == null) {
			return;
		}
		
		dto.setId(entity.getIdVocabulary() + "");
		dto.setWord(entity.getWord());
		dto.setMeaning(entity.getMeaning());
		dto.setImg(entity.getImgUrl());
	}

}
