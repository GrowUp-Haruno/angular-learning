import { Component } from '@angular/core';
import { Member } from 'src/app/member';
import { MEMBERS } from 'src/mock-members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  members = MEMBERS;
  selectedMember: Member | undefined;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
