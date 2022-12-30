import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  tip: string | null = null;

  constructor(public modalRef: MdbModalRef<HelpComponent>) {}

  ngOnInit(): void {}
}
