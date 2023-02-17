import { Component } from '@angular/core';
import { Member } from 'src/app/member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  members: Member[] | undefined;
  selectedMember: Member | undefined;

  // Dependency Injectionを用いている
  constructor(private MemberService: MemberService) {}

  // ReactのuseEffectに相当
  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.members = this.MemberService.getMember();
  }
}
