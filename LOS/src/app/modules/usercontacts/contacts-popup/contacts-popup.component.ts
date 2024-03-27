import { Component, Input, OnInit } from '@angular/core';
import { Contacts } from 'src/app/Shared/models/contacts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-popup',
  templateUrl: './contacts-popup.component.html',
  styleUrls: ['./contacts-popup.component.css']
})
export class ContactsPopupComponent implements OnInit{
saveContactsData() {
throw new Error('Method not implemented.');
}

@Input() currentContact: Contacts = new Contacts();
contactsForm!: FormGroup;
contacts: Contacts[] = [];
  formBuilder: any;
  dialogRef: any;

ngOnInit(): void {
 this.contactsForm = this.formBuilder.group({
  COMPANYNAME:['',[Validators.required]],
  FIRSTNAME:['',[Validators.required]],
  LASTNAME:['',[Validators.required]],
  ROLE:['',[Validators.required]],
  EMAIL:['',[Validators.required]],
  Phone:['',[Validators.required]],
  OFFILE:['',[Validators.required]],
  ACTION:['',[Validators.required]],
 })
}


public onAddContacts(): void {
  this.markAsDirty(this.contactsForm);
}
startDate = new Date(1990, 0, 1);
resetForm(){
  this.contactsForm.reset();
}
public closeForm(): void { 
  this.dialogRef.close();
  }
  public onAddContact(): void {
    this.markAsDirty(this.contactsForm);
  }
  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

}
