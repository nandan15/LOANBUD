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
 
  dialogRef: any;
  constructor(private formBuilder: FormBuilder) {}
ngOnInit(): void {
 this.contactsForm = this.formBuilder.group({
  CompanyName:['',[Validators.required]],
  FirstName:['',[Validators.required]],
  LastName:['',[Validators.required]],
  Role:['',[Validators.required]],
  Email:['',[Validators.required]],
  Phone:['',[Validators.required]],
  FILE:['',[Validators.required]],
  Action:['',[Validators.required]],
 })
}


public onAddContacts(): void {
  this.markAsDirty(this.contactsForm);
}
startDate = new Date(1990, 0, 1);
resetForm(){
  this.contactsForm.reset();
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
  public closeForm(): void { 
    this.dialogRef.close();
    }
}
