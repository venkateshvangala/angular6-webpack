const ServiceStatusUtil = function(){
  this.requestStatus = "",
  this.subscribersList = [],
  this.service = undefined,
  this.publishSubscribes = function(status, res) {
    for (let sub of this.subscribersList) {
      if (status === "SUCCESS") sub.next(res);
      else sub.error(res);
      sub.complete();
    }
  }
}

export {
  ServiceStatusUtil
}