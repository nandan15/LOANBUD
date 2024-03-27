import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Broker } from 'src/app/Shared/models/broker';

@Component({
  selector: 'app-broker-popup',
  templateUrl: './broker-popup.component.html',
  styleUrls: ['./broker-popup.component.css']
})
export class BrokerPopupComponent implements OnInit {
  @Input() currentBroker: Broker = new Broker();
  brokerform!: FormGroup;
  broker: Broker[] = [];
  dialogRef: any;

  constructor(private formBuilder: FormBuilder) {} // Injecting FormBuilder here

  ngOnInit(): void {
    this.brokerform = this.formBuilder.group({
      BrokerName: ['', [Validators.required]],
      Company: ['', [Validators.required]],
      BranchLoanOfficer: ['', [Validators.required]],
      BrokerType: ['', [Validators.required]],
      FileCount: ['', [Validators.required]],
      ApprovalStatus: ['', [Validators.required]],
      Lastlogin: ['', [Validators.required]],
      Actions: ['', [Validators.required]],
    });
  }

  public onAddContacts(): void {
    this.markAsDirty(this.brokerform);
  }

  startDate = new Date(1990, 0, 1);

  resetForm() {
    this.brokerform.reset();
  }

  public closeForm(): void {
    this.dialogRef.close();
  }

  public onAddContact(): void {
    this.markAsDirty(this.brokerform);
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }
  saveBrokerData():void{

  }
}
