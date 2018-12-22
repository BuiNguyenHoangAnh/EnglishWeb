package uit.blo.define;

import java.util.Set;

import uit.dto.TopicDto;
import uit.dto.VocabularyDto;
import uit.entity.Topic;
import uit.entity.Vocabulary;

public interface IVocabularyBlo {
	
	/**
	 * Lấy các vocabulary tùy thuộc vào topic
	 * @param topicId
	 * @return
	 */
	Set<VocabularyDto> getVocabularyByTopicId(Integer topicId);
	VocabularyDto convertEntityToVocabularyDto(Vocabulary entity);
	
	Set<TopicDto> getAllTopic();
	TopicDto convertEntityToTopicDto(Topic topic);
}
