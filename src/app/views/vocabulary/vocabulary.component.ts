import {Component, OnInit} from "@angular/core";
import {VocabularyService} from "../../services/vocabulary.service";
import VocabularyDto from "../../model/vocabulary.dto";
import TopicDto from "src/app/model/topic.dto";

@Component({selector: "app-vocabulary", templateUrl: "./vocabulary.component.html", styleUrls: ["./vocabulary.component.css"]})
export class VocabularyComponent implements OnInit {
    vocabularies : Array < VocabularyDto >;
    topics : Array < TopicDto >;

    constructor(private vocabularyService : VocabularyService) {
        this.getVocabulariesByTopic1("1");
        this.getAllTopic();
    }

    ngOnInit() {}

    private getVocabulariesByTopic1(idTopic : string) : void {

        this
            .vocabularyService
            .getVocabulariesByTopicId(idTopic)
            .subscribe(data => {

                this.setDataForVocabularies(data);
            });

    }

    private setDataForVocabularies(data : any) {
        this.vocabularies = [];

        data.forEach(voc => {
            const dto = new VocabularyDto();
            this
                .vocabularyService
                .convertJsonToVocabularyDto(voc, dto);
            this
                .vocabularies
                .push(dto);
        });

        this.vocabularies = this
            .vocabularies
            .sort((voc1 : VocabularyDto, voc2 : VocabularyDto) => +voc1.id - +voc2.id);
    }

    private getAllTopic() {
        this.topics = [];
        this.vocabularyService.getAllTopic().subscribe(data=>{
            data.forEach(d => {
                const dto = new TopicDto();
                this.vocabularyService.convertJsonToTopicDto(d, dto)
                this.topics.push(dto);
            });
        });
    }
}
