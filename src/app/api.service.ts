import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { URLs } from "./app.urls";

@Injectable({
  providedIn: "root"
})
export class APIService {
  private httpClient: HttpClient;
  private router: Router;
  private urls: Object = URLs;
  constructor(router: Router, httpClient: HttpClient) {
    this.router = router;
    this.httpClient = httpClient;
  }

  getAPIInfo(action): Object {
    let keys = action.split("."),
      temp: Object = this.urls,
      isFound: boolean = true;
    for (let i = 0; i < keys.length; i++) {
      if (temp[keys[i]]) temp = temp[keys[i]];
      else isFound = false;
    }
    if (isFound && temp["method"] != undefined && temp["url"] != undefined)
      return temp;
    else return null;
  }

  getFullURL(action: string, options?: { [key: string]: string }): string {
    // return "http://192.168.11.200:65500/DTP-1.0/api";
    return "https://jsonplaceholder.typicode.com";
  }

  public api({
    action,
    payload = null,
    params = null
  }: {
    action: string;
    payload?: Object;
    params?: Object;
  }): Observable<any> {
    let self = this;
    let result: Observable<Object>;
    result = new Observable(subscriber => {
      let apiInfo: Object = this.getAPIInfo(action);
      if (apiInfo == null) {
        subscriber.error("API info for action: " + action + " not found!");
        return;
      }
      let apiURL: string = apiInfo["url"];
      if (params != null) {
        apiURL = apiURL.replace(/:[^\/\?\&]*/g, param => {
          return params[param.substr(1)];
        });
      }
      apiURL = this.getFullURL(action) + "/" + apiURL;
      let httpSubscriber: any;
      let headers = new HttpHeaders();
      // let headers = new HttpHeaders({
      //   "Content-Type": "application/json"
      // });

      httpSubscriber = this.createHTTP(apiInfo, apiURL, payload);
      if(!httpSubscriber) return;
      httpSubscriber.subscribe(
        response => {
          if (response && response.status && response.status != "") {
            switch (response.status.toUpperCase()) {
              case "SUCCESS":
                subscriber.next(response.data);
                subscriber.complete();
                break;
              case "FAILURE":
                this.router.navigate(["errorPage"]);
              case "WARNING":
              case "ERROR":
              default:
                subscriber.error(
                  self.getError(action + "." + response.message) ||
                    response.message ||
                    ""
                );
            }
          } else {
            subscriber.next(response);
            subscriber.complete();
          }
        },
        error => {
          if (error && typeof error == "string") {
            if (
              error &&
              JSON.parse(error).status &&
              (JSON.parse(error).status.toUpperCase() == "NO_COOKIE" ||
                JSON.parse(error).status.toUpperCase() == "TOKEN_REISSUE")
            ) {
              window.location.reload();
            } else if (
              error &&
              JSON.parse(error).status &&
              (JSON.parse(error).status.toUpperCase() == "INVALID_TOKEN" ||
                JSON.parse(error).status.toUpperCase() == "SESSION_IDLE" ||
                JSON.parse(error).status.toUpperCase() == "TOKEN_INVALIDATE" ||
                JSON.parse(error).status.toUpperCase() == "LOGGED_OUT")
            ) {
              self.logoutUser();
            }
          }
          if (error && error.status && error.status === 401) {
            self.processUnauthenticated(error);
          } else if (error && error.status && error.status === 403) {
            subscriber.error({
              statusCode: 403
            });
          } else if (error && error.status && error.status === 404) {
            subscriber.error(apiURL + " not found");
          } else {
            subscriber.error();
          }
        }
      );
    });
    return result;
  }

  getError(action: string): string {
    console.log("api failure.");
    return "Fail";
  }

  processUnauthenticated(error) {
    let res = error.json();
    // If the response status is NO_COOKIE || TOKEN_REISSUE then reload the page to get the cookies from sentry domain if available
    // If sentry application does not have cookies, ngnix will redirect the application to login page on reload the application
    if (res && (res.status === "NO_COOKIE" || res.status === "TOKEN_REISSUE")) {
      window.location.reload();
    } else {
      this.logoutUser();
    }
  }

  gotoLogin() {
    this.router.navigate(["/login"]);
  }

  logoutUser() {
    window.location.href = "/logout";
  }

  createHTTP(apiInfo: Object, apiURL: string, payload: Object) {
    let httpSubscriber: any;
      // let headers = new HttpHeaders().set("Content-Type", "application/json");
      let headers = new HttpHeaders();
      switch (apiInfo["method"].toLowerCase()) {
      case "get":
        httpSubscriber = this.httpClient.get(apiURL, { headers });
        break;
      case "post":
        httpSubscriber = this.httpClient.post(apiURL, payload);
        break;
      case "put":
        httpSubscriber = this.httpClient.put(apiURL, JSON.stringify(payload), {
          headers
        });
        break;
      case "delete":
        httpSubscriber = this.httpClient.delete(apiURL, { headers });
        break;
      case "multipart-post":
        httpSubscriber = new Observable(subscriber => {
          let xhr: XMLHttpRequest = new XMLHttpRequest();
          xhr.open("POST", apiURL, true);
          xhr.send(payload);
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                subscriber.next({
                  json: () => {
                    return JSON.parse(xhr.response);
                  }
                });
                subscriber.complete();
              } else subscriber.error(xhr.response);
            }
          };
        });
        break;
        default: null
    }
    return httpSubscriber;
  }
}
