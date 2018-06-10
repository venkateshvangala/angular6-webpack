import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIService } from "../api.service";
import { ServiceStatusUtil } from "../utils/service-status.util";
let serviceStatusUtil = new ServiceStatusUtil();

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: any;
  constructor(service: APIService) {
    serviceStatusUtil.service = service;
  }

  getUser() {
    let self = this;
    if (this.user) {
      return new Observable(subscriber => {
        subscriber.next(this.user);
        subscriber.complete();
      });
    }
    return new Observable(subscriber => {
      if (serviceStatusUtil.requestStatus === "loading") {
        serviceStatusUtil.subscribersList.push(subscriber);
        return;
      }
      serviceStatusUtil.requestStatus = "loading";
      serviceStatusUtil.subscribersList.push(subscriber);
      serviceStatusUtil.service
        .api({
          action: "app.user"
        })
        .subscribe(
          user => {
            serviceStatusUtil.requestStatus = "loaded";
            self.user = user;
            serviceStatusUtil.publishSubscribes("SUCCESS", self.user);
            let fullName = self.user.firstName
              ? `${self.user.firstName} ${self.user.lastName}`
              : self.user.lastName;
          },
          error => {
            serviceStatusUtil.requestStatus = "error";
            serviceStatusUtil.publishSubscribes("ERROR", error);
            console.error(error || "Unable to get user information");
          }
        );
    });
  }
}
