import {Injectable} from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import VocabularyDto from './../model/vocabulary.dto';
import TopicDto from './../model/topic.dto';


@Injectable({providedIn: "root"})
export class VocabularyService {

	private vocabylaryApiPath = 'https://8080/views/vocabulary/';

	private METHODS = {
		VOCABYLARIES_BY_TOPIC: 'get-vocabularies-by-topic-id/'
	};

    constructor(private http: HttpClient) {}

    public getVocabulariesByTopicId(topicId: string): Observable<any>{
		return this.http.get('http://localhost:8080/views/vocabulary/get-vocabularies-by-topic-id/' + topicId);
	}
	
	public getAllTopic(): Observable<any> {
		return this.http.post('http://localhost:8080/views/vocabulary/get-all-topic', '');
	}

	public convertJsonToVocabularyDto(data: any, dto: VocabularyDto): void {
		dto.id = data.id;
		dto.word = data.word;
		dto.meaning = data.meaning;
		dto.img = data.meaning;
		
	}

	public convertJsonToTopicDto(data: any, dto: TopicDto): void {
		dto.id = data.id;
		dto.topicName = data.topicName;
	}

	private errorHandler(error: HttpErrorResponse) {
		return Observable.throw(error.message || 'System Error');
	}
}
