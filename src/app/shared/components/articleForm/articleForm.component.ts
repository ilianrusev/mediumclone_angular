import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleFormValuesInterface } from './types/articleFormValues';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../BackendErrorMessages/BackendErrorMessages.component';

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesComponent],
})
export class ArticleForm implements OnInit {
  @Input() initialValues?: ArticleFormValuesInterface;
  @Input() isSubmitting: boolean = false;
  @Input() errors: BackendErrorsInterface | null = null;

  @Output() articleSubmit = new EventEmitter<ArticleFormValuesInterface>();

  form = this.fb.nonNullable.group({
    title: '',
    description: '',
    body: '',
    tagList: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (!this.initialValues) {
      throw new Error('Inputs are not provided');
    }
    this.form.patchValue({
      title: this.initialValues?.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' '),
    });
  }

  onSubmit(): void {
    const articleFormValues: ArticleFormValuesInterface = {
      ...this.form.getRawValue(),
      tagList: this.form.getRawValue().tagList.split(' '),
    };

    this.articleSubmit.emit(articleFormValues);
  }
}
