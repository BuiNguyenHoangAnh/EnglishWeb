package uit.blo.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import uit.blo.define.IVocabularyBlo;
import uit.converter.TopicConverter;
import uit.converter.VocabularyConverter;
import uit.dto.TopicDto;
import uit.dto.VocabularyDto;
import uit.entity.Topic;
import uit.entity.Vocabulary;
import uit.repository.TopicRepository;
import uit.repository.VocabularyRepository;

@Component
public class VocabularyBloImpl implements IVocabularyBlo {

	@Autowired
	private VocabularyRepository vocabularyRepository;

	@Autowired
	private TopicRepository topicRepository;

	@Autowired
	private VocabularyConverter vocabularyConverter;

	@Autowired
	private TopicConverter topicConverter;

	@Override
	public Set<VocabularyDto> getVocabularyByTopicId(Integer topicId) {

		Set<VocabularyDto> vocabularyDtos = new HashSet<>();

		Optional<Topic> optTopic = this.topicRepository.findById(topicId);

		if (optTopic.isPresent()) {

			Set<Vocabulary> vocabularies = this.vocabularyRepository.findByTopic(optTopic.get());

			vocabularies.forEach(vocabulary -> {
				VocabularyDto dto = this.convertEntityToVocabularyDto(vocabulary);

				if (dto != null) {

					vocabularyDtos.add(dto);
				}

			});

		}

		return vocabularyDtos;
	}

	@Override
	public VocabularyDto convertEntityToVocabularyDto(Vocabulary entity) {

		VocabularyDto dto = null;

		if (entity != null) {
			dto = new VocabularyDto();
			this.vocabularyConverter.convertEntityToDto(entity, dto);
		}

		return dto;
	}

	@Override
	public Set<TopicDto> getAllTopic() {

		Set<TopicDto> topicDtos = new HashSet<>();

		List<Topic> topics = this.topicRepository.findAll();

		topics.forEach(topic -> {

			TopicDto dto = this.convertEntityToTopicDto(topic);

			if (dto != null) {
				topicDtos.add(this.convertEntityToTopicDto(topic));
			}

		});

		return topicDtos;
	}

	@Override
	public TopicDto convertEntityToTopicDto(Topic topic) {

		TopicDto dto = null;

		if (topic != null) {
			dto = new TopicDto();
			this.topicConverter.convertEntityToDto(topic, dto);
		}

		return dto;
	}

}
