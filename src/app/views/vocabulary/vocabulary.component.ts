import {Component, OnInit} from "@angular/core";
import {VocabularyService} from "../../services/vocabulary.service";
import VocabularyDto from "../../model/vocabulary.dto";

@Component({selector: "app-vocabulary", templateUrl: "./vocabulary.component.html", styleUrls: ["./vocabulary.component.css"]})
export class VocabularyComponent implements OnInit {
    vocabularies : Array <VocabularyDto>;

    constructor(private vocabularyService : VocabularyService) {
        this.getVocabulariesByTopic1("1");
    }

    ngOnInit() {}

    private getVocabulariesByTopic1(idTopic : string) : void {

        this.vocabularyService
            .getVocabulariesByTopicId(idTopic)
            .subscribe(data => {
				
				this.setDataForVocabularies(data);
			});
			
    }

    private setDataForVocabularies(data: any){
        this.vocabularies = [];

        data.forEach(voc => {
            const dto = new VocabularyDto();
            this.vocabularyService.convertJsonToVocabularyDto(voc, dto);
            this.vocabularies.push(dto);
        });
       
        this.vocabularies = this.vocabularies.sort((voc1: VocabularyDto, voc2: VocabularyDto)=>{

            if(eval(voc1.id) > eval(voc2.id)){
                return 1;
            }else if(eval(voc1.id) < eval(voc2.id)){
                return -1;
            }

            return 0;
        });
    }
}
