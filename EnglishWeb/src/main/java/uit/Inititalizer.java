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

import uit.entity.FairyTail;
import uit.entity.Topic;
import uit.entity.Vocabulary;
import uit.repository.FairyTailRepository;
import uit.repository.TopicRepository;
import uit.repository.VocabularyRepository;

@Component
public class Inititalizer implements CommandLineRunner {

	private final static String PATH = "D:\\Tài liệu\\UIT\\Công nghệ web\\Vocabulary.xlsx";

	@Autowired
	private TopicRepository topicRepository;

	@Autowired
	private VocabularyRepository vocabularyRepository;

	@Autowired
	private FairyTailRepository fairyTailRepository;

	private static final boolean FLAG = false; 

	@Override
	public void run(String... args) throws Exception {

		if (FLAG) {
			Workbook workBook = WorkbookFactory.create(new File(PATH));

			for (Sheet sheet : workBook) {
				Topic topic = new Topic(sheet.getSheetName());
				topicRepository.save(topic);

				for (Row row : sheet) {

					List<String> tempList = new ArrayList<>();
					for (Cell cell : row) {
						tempList.add(cell.toString());
					}

					String vocabularyName = tempList.get(0);

					String[] list = vocabularyName.split(" ");

					String img = String.join("-", list);

					Vocabulary voc = new Vocabulary(topic, tempList.get(0), tempList.get(1), img);
					vocabularyRepository.save(voc);
				}
			}

			FairyTail fairyTail = new FairyTail();
			fairyTail.setTitle("Cinderella");
			fairyTail.setBody("Once upon a time there was a kind and beautiful girl, whose name was Cinderella.\r\n"
					+ "                    She lived with her cruel stepmother and stepsisters where she was treated as a\r\n"
					+ "                    servant and spent her days cleaning, tidying and waiting on them hand and foot.\r\n"
					+ "                    Despite their cruelty, Cinderella would always remember her mother’s words:\r\n"
					+ "                    ‘Have courage and be kind.’\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    One day an invitation to a royal ball arrived. The Prince was looking for a\r\n"
					+ "                    bride and everyone in the kingdom was invited. Her stepmother immediately\r\n"
					+ "                    ordered new gowns to be made for herself and her daughters. Cinderella worked\r\n"
					+ "                    day and night to prepare the new dresses in time.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    On the day of the ball, as they were preparing to leave, Cinderella came down\r\n"
					+ "                    the stairs in a dress she had made for herself. Her stepmother and stepsisters\r\n"
					+ "                    were so angry to see her looking so beautiful they tore up the dress and left\r\n"
					+ "                    without her.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    Left alone, Cinderella began to cry when all of a sudden her Fairy Godmother\r\n"
					+ "                    appeared.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    “Do not cry my child, you shall go to the ball!” she said.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    “But I do not have a dress to wear.” cried Cinderella. Her Fairy Godmother waved\r\n"
					+ "                    her magic wand and at once Cinderella’s rags turned into a beautiful new ball\r\n"
					+ "                    gown.\r\n" + "\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    Then her Fairy Godmother found six mice playing in the pumpkin patch.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    She touched them with her magic wand and the pumpkin turned into a beautiful\r\n"
					+ "                    coach and the mice into four white horses and two coachmen.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    When everything was ready, Cinderella waved goodbye to her fairy godmother who\r\n"
					+ "                    said, “The magic will only last until midnight. You must reach home by then.”\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    When she entered the ballroom, the guests were struck by her beauty and her\r\n"
					+ "                    stepmother and stepsisters did not know who she was. The prince asked Cinderella\r\n"
					+ "                    to dance and she was overjoyed.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    The Prince and Cinderella danced all evening until Cinderella noticed the clock\r\n"
					+ "                    approaching midnight and she remembered her godmother’s words. “I must go” she\r\n"
					+ "                    told the Prince as she fled from the ballroom.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    As she ran down the steps of the palace, one of her glass slippers fell off, but\r\n"
					+ "                    Cinderella did not stop to pick it up. She returned home just as the clock\r\n"
					+ "                    struck twelve.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    Her coach turned back into a pumpkin, her horses became mice and she was wearing\r\n"
					+ "                    rags once more. Her stepmother and stepsisters arrived home shortly afterwards\r\n"
					+ "                    and were full of talk of the beautiful girl who had danced all night with the\r\n"
					+ "                    prince.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    The prince had fallen in love with Cinderella the moment he saw her, but he did\r\n"
					+ "                    not even know her name. He picked up her glass slipper from the steps and\r\n"
					+ "                    declared “I will marry the girl whose foot fits this slipper.”\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    The prince and his servants took the glass slipper to every house in the\r\n"
					+ "                    Kingdom, but it did not fit any of the women who tried it on.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    Cinderella’s stepsisters tried to squeeze their large feet into the dainty shoe,\r\n"
					+ "                    but the servant was afraid it might break. Cinderella’s stepmother would not let\r\n"
					+ "                    her try on the slipper, but the prince said “Wait! Let her try it!”.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    The slipper fit Cinderella’s foot perfectly and the Prince realised this was the\r\n"
					+ "                    beautiful girl he had danced with at the ball.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    The Prince had found the girl he was looking for. They were married and both\r\n"
					+ "                    lived happily ever after.");

			this.fairyTailRepository.save(fairyTail);

			FairyTail fairyTail2 = new FairyTail();
			fairyTail2.setTitle("The Ugly Duckling");
			fairyTail2.setBody("It is a beautiful summer day. The sun shines warmly on an old house near a\r\n"
					+ "                    river. Behind the house a mother duck is sitting on ten eggs. \"Tchick.\" One by\r\n"
					+ "                    one all the eggs break open.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    All except one. This one is the biggest egg of all.\r\n" + "\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    Mother duck sits and sits on the big egg. At last it breaks open, \"Tchick,\r\n"
					+ "                    tchick!\"\r\n" + "                    <br/>\r\n"
					+ "                    <br/>Out jumps the last baby duck. It looks big and strong. It is grey and ugly.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    The next day mother duck takes all her little ducks to the river. She jumps into\r\n"
					+ "                    it. All her baby ducks jump in. The big ugly duckling jumps in too.\r\n"
					+ "\r\n" + "                    <br/>\r\n"
					+ "                    <br/>They all swim and play together. The ugly duckling swims better than all\r\n"
					+ "                        the other ducklings.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    - Quack, quack! Come with me to the farm yard! - says mother duck to her baby\r\n"
					+ "                    ducks and they all follow her there.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>The farm yard is very noisy. The poor duckling is so unhappy there. The\r\n"
					+ "                        hens peck him, the rooster flies at him, the ducks bite him, the farmer kicks\r\n"
					+ "                        him.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    At last one day he runs away. He comes to a river. He sees many beautiful big\r\n"
					+ "                    birds swimming there. Their feathers are so white, their necks so long, their\r\n"
					+ "                    wings so pretty. The little duckling looks and looks at them. He wants to be\r\n"
					+ "                    with them. He wants to stay and watch them. He knows they are swans. Oh, how he\r\n"
					+ "                    wants to be beautiful like them.\r\n" + "                    <br/>\r\n"
					+ "                    <br/>\r\n"
					+ "                    Now it is winter. Everything is white with snow. The river is covered with ice.\r\n"
					+ "                    The ugly duckling is very cold and unhappy. Spring comes once again. The sun\r\n"
					+ "                    shines warmly. Everything is fresh and green.\r\n"
					+ "                    <br/>\r\n" + "                    <br/>\r\n"
					+ "                    One morning the ugly duckling sees the beautiful swans again. He knows them. He\r\n"
					+ "                    wants so much to swim with them in the river. But he is afraid of them. He wants\r\n"
					+ "                    to die. So he runs into the river. He looks into the water. There in the water\r\n"
					+ "                    he sees a beautiful swan. It is he! He is no more an ugly duckling. He is a\r\n"
					+ "                    beautiful white swan.");

			this.fairyTailRepository.save(fairyTail2);
			
			System.out.println("Lưu dữ liệu thành công");

		}

	}

}
