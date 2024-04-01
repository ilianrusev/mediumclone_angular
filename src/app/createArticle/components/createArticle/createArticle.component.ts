import { Component } from '@angular/core';
import { ArticleForm } from 'src/app/shared/components/articleForm/articleForm.component';
import { ArticleFormValuesInterface } from 'src/app/shared/components/articleForm/types/articleFormValues';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleForm],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    console.log(articleFormValues);
  }
}
