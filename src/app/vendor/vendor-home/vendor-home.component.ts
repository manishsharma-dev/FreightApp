import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MONTH_DATA } from 'src/app/admin/user-log/user-log.component';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.scss']
})
export class VendorHomeComponent implements OnInit {
  selectedMonth: number;
  monthList = MONTH_DATA;
  file_type_errorMessage = "";
  file_size_errorMessage = "";
  file_error = false;
  form: FormGroup;
  formSubmitted = false;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.selectedMonth = new Date().getMonth();
    this.form = this._fb.group({
      month: [this.selectedMonth, Validators.required],
      file: [null, Validators.required]
    })
  }

  handleFileInput(event) {
    //fileType = event.target.files[0].name.split('.').pop();
    for (let file of event.target.files) {
      const fileType = event.target.files[0].name.split('.').pop();
      if (fileType != 'xlsx' && fileType != 'xls' && fileType != 'csv') {
        this.file_error = true;
        this.file_type_errorMessage = "File Extension Is Invalid - Only Upload EXCEL File."
        this.file_size_errorMessage = "";
        return;
      }
      else if (file.size / 1024 > 10240) {
        this.file_error = true;
        this.file_size_errorMessage = "File size should be upto 10 Mb";
        this.file_type_errorMessage = "";
        return
      }
      else {
        this.file_error = false;
        this.file_type_errorMessage = "";
        this.file_size_errorMessage = "";
      }
    }
    this.form.patchValue({
      file: event.target.files
    });

  }

  formSubmit() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
  }

  formReset() {
    this.file_error = false;
    this.file_type_errorMessage = "";
    this.file_size_errorMessage = "";
    this.formSubmitted = false;
    this.form.reset(); 
  }

}
