import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  baseAPIurl = "http://127.0.0.1:5000";

  lectureOne_1(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/1", answer, {
      observe: "response",
    });
  }

  lectureOne_2(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/2", answer, {
      observe: "response",
    });
  }

  lectureOne_3(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/3", answer, {
      observe: "response",
    });
  }

  lectureOne_4(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/4", answer, {
      observe: "response",
    });
  }

  lectureOne_5(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/5", answer, {
      observe: "response",
    });
  }

  lectureOne_6(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/6", answer, {
      observe: "response",
    });
  }

  lectureOne_7(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/7", answer, {
      observe: "response",
    });
  }

  lectureOne_8(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/8", answer, {
      observe: "response",
    });
  }

  lectureOne_9(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/9", answer, {
      observe: "response",
    });
  }

  lectureOne_10(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/10", answer, {
      observe: "response",
    });
  }

  lectureOne_11(answer: any[]) {
    return this.http.post(this.baseAPIurl + "/lectionOne/11", answer, {
      observe: "response",
    });
  }
}
