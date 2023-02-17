import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public memberService: MemberService) {}
  members: Member[] = [];

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.memberService
      .getMember()
      .subscribe((member) => (this.members = member.slice(1, 5)));
  }
}
