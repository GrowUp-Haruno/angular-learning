import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from 'src/app/member';
import { MEMBERS } from 'src/mock-members';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor() {}

  getMember(): Observable<Member[]> {
    // 実際にはバックエンドから拾ったデータを返す
    return of(MEMBERS);
  }
}
