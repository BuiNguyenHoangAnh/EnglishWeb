package uit.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vocabulary", catalog = "englishweb")
public class Vocabulary implements java.io.Serializable {

	private static final long serialVersionUID = -7193173944243609282L;
	private Integer idVocabulary;
	private Topic topic;
	private String word;
	private String meaning;
	private String imgUrl;

	public Vocabulary() {
	}

	public Vocabulary(Topic topic, String word, String meaning) {
		this.topic = topic;
		this.word = word;
		this.meaning = meaning;
	}

	public Vocabulary(Topic topic, String word, String meaning, String imgUrl) {
		this.topic = topic;
		this.word = word;
		this.meaning = meaning;
		this.imgUrl = imgUrl;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id_vocabulary", unique = true, nullable = false)
	public Integer getIdVocabulary() {
		return this.idVocabulary;
	}

	public void setIdVocabulary(Integer idVocabulary) {
		this.idVocabulary = idVocabulary;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_topic", nullable = false)
	public Topic getTopic() {
		return this.topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	@Column(name = "word", nullable = false, length = 100)
	public String getWord() {
		return this.word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	@Column(name = "meaning", nullable = false, length = 100)
	public String getMeaning() {
		return this.meaning;
	}

	public void setMeaning(String meaning) {
		this.meaning = meaning;
	}

	@Column(name = "img_url")
	public String getImgUrl() {
		return this.imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

}
