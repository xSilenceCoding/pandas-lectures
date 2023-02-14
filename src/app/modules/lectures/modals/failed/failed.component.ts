import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.scss'],
})
export class FailedComponent implements OnInit {
  errorMessage: any;
  constructor(public modalRef: MdbModalRef<FailedComponent>) {}

  ngOnInit(): void {}
}
