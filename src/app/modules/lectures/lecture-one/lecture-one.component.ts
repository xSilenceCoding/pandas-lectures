import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HelpComponent } from '../modals/help/help.component';

import { readCSV, DataFrame, toJSON } from 'danfojs';
import { asapScheduler, combineLatest } from 'rxjs';
import { ResultComponent } from '../modals/result/result.component';
import { FailedComponent } from '../modals/failed/failed.component';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-lecture-one',
  templateUrl: './lecture-one.component.html',
  styleUrls: ['./lecture-one.component.scss'],
})
export class LectureOneComponent implements OnInit {
  modalRef: MdbModalRef<HelpComponent> | null = null;
  df: any;

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {
    readCSV('assets/database/cia.csv') //assumes file is in CWD
      .then((df) => {
        this.df = df;
        //df.head().print();
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    const result = 'df';

    this.df.print();

    if (result == input) {
      this.modalRef = this.modalService.open(ResultComponent, {});
    } else {
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskTwo(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']", "df[['Name']]"];

    let objResult = [
      { answer: 'df.Name', tip: 'Ergibt ein Dataframe', rec: true },
      { answer: "df['Name']", tip: 'Ergibt eine Serie' },
      { answer: "df[['Name']]", tip: 'Ergibt ein DataFrame' },
    ];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      let tips = objResult.filter((item) => item.answer !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskThree(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskFour(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskFive(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskSix(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskSeven(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskEight(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskNine(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskTen(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
  }

  // Checks if userInput is same as result
  sendTaskEleven(userInput: any) {
    const input = this.trim(userInput);
    const result = ['df.Name', "df['Name']"];

    if (result[0] == input || result[1] == input) {
      // Filter result and give other tips back
      const tips = result.filter((tip) => tip !== input);

      // Open success modal with tips
      this.modalRef = this.modalService.open(ResultComponent, {
        data: {
          tips: tips,
        },
      });
    } else {
      // Open failed modal
      this.modalRef = this.modalService.open(FailedComponent, {});
    }
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
