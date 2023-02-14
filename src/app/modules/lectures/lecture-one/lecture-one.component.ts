import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HelpComponent } from '../modals/help/help.component';

import { ResultComponent } from '../modals/result/result.component';
import { FailedComponent } from '../modals/failed/failed.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lecture-one',
  templateUrl: './lecture-one.component.html',
  styleUrls: ['./lecture-one.component.scss'],
})
export class LectureOneComponent implements OnInit {
  modalRef: MdbModalRef<HelpComponent> | null = null;

  constructor(
    private modalService: MdbModalService,
    private dService: DataService
  ) {}

  ngOnInit(): void {}

  helpTaskOne() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: `Mit SELECT * FROM 'Tabelle' 
              kann man sich alle Daten einer
              Tabelle anzeigen lassen.`,
      },
    });
  }

  helpTaskTwo() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: `Benutze eine SELECT-Anweisung für das Attribut 'Name' in der Tabelle 'cia'. `,
      },
    });
  }

  helpTaskThree() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskFour() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskFive() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskSixs() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskSeven() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskEight() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskNine() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskelTen() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  helpTaskelEleven() {
    this.modalRef = this.modalService.open(HelpComponent, {
      data: {
        tip: ``,
      },
    });
  }

  sendTaskOne(userInput: any) {
    const input = this.trim(userInput);

    if ('df' == input || 'print(df)' == input) {
      this.modalRef = this.modalService.open(ResultComponent, {});
    } else {
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskTwo(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_2(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskThree(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_3(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskFour(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_4(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {});
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskFive(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_5(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskSix(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_6(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskSeven(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_7(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskEight(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_8(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskNine(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_9(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskTen(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_10(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  // Checks if userInput is same as result
  sendTaskEleven(userInput: any) {
    const input = userInput.split('\n').map((line: any) => line);

    this.dService.lectureOne_11(input).subscribe(
      (result) => {
        console.info(result);
        if (result.body['success'] === true) {
          this.modalRef = this.modalService.open(ResultComponent, {
            data: { result: result.body['result'] },
          });
        } else {
          // Open failed modal
          this.modalRef = this.modalService.open(FailedComponent, {
            data: { errorMessage: result.body['errorMessage'] },
          });
        }
      },
      (error) => {
        console.error(error);
        // Open error modal
        this.modalRef = this.modalService.open(FailedComponent, {
          data: { errorMessage: error['statusText'] },
        });
      }
    );
  }

  /* 
  UserInput --> Replace
  empty lines, empty space at the end & beginning, replace " with ' 
  */
  trim(userInput: string) {
    return userInput
      .replace(/^\s*\n/gm, '')
      .split('"')
      .join("'")
      .split(/\r?\n/)
      .filter((line) => line.trim() !== '')
      .join('\n');
  }
}
