import { LightningElement, wire } from "lwc";
import { refreshApex } from "@salesforce/apex";
import Id from "@salesforce/user/Id";


export default class PartnerPlanning extends LightningElement {

plans = [];
userId = Id;

wiredPlanData;
  @wire(getPlansForUser, { userId: "$userId" })
  getPlansForUser(result) {
    this.wiredPlanData = result;
    if (result.data) {
      this.plans = result.data;
      this.error = undefined;
    } else if (result.error) {
      this.error = result.error;
      this.plans = undefined;
    }
  }
//for example
    closeModal() {
    refreshApex(this.wiredPlanData);
  }
}
  
