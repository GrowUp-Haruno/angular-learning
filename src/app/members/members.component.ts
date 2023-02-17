import { Component } from '@angular/core';
import { Member } from 'src/app/member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  members: Member[] | undefined;
  selectedMember: Member | undefined;

  // Dependency Injectionを用いている
  constructor(
    private memberService: MemberService,
    private messageService: MessageService
  ) {}

  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(
      `MembersComponent: ${member.name}さんを選択しました`
    );
  }

  getMembers(): void {
    this.memberService
      .getMember()
      .subscribe((members) => (this.members = members));
  }
  // ReactのuseEffectに相当
  ngOnInit(): void {
    this.getMembers();
  }
}
