import { LightningElement, track } from 'lwc';

export default class ParentComp extends LightningElement {
@track parentvalue=50;

getparentChildComm(event)
{
    this.parentvalue=event.target.value;
}
}