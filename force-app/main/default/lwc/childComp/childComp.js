import { LightningElement,api } from 'lwc';

export default class ChildComp extends LightningElement
 {
   @api childvalue=20;

 get style()
 {
   return 'width  ${this.childvalue}%';
 }

}