package uit.converter;

import org.springframework.stereotype.Component;

import uit.dto.TopicDto;
import uit.entity.Topic;

@Component
public class TopicConverter implements BaseConverter<Topic, TopicDto>{

	@Override
	public void convertEntityToDto(Topic entity, TopicDto dto) {
		if(entity == null || dto == null) {
			
			return;
		}
		
		dto.setId(entity.getIdTopic()+"");
		dto.setTopicName(entity.getTopicName());
	}

}
