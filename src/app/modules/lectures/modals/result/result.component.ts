import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: [];
  constructor(public modalRef: MdbModalRef<ResultComponent>) {}

  ngOnInit(): void {
    //console.log(this.result);
  }
}
