package uit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uit.entity.FairyTail;

@Repository
public interface FairyTailRepository extends JpaRepository<FairyTail, Integer>{

}
