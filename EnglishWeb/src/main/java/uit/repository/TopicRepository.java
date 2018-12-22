package uit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uit.entity.Topic;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Integer>{

}
