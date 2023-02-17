import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from 'src/app/member';
import { MessageService } from 'src/app/message.service';
import { MEMBERS } from 'src/mock-members';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private messageService: MessageService) {}

  getMember(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました');
    return of(MEMBERS);
  }
}
