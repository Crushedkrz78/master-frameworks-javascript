import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit: boolean;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url+'upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo',
      afterUploadMsg_success: 'Successfully Uploaded!',
      afterUploadMsg_error: 'Upload Failed!'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = "Crear Artículo";
    this.is_edit = false;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.article);
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']);
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error)
        this.status = 'error';
      }
    );
  }

  imageUpload(data){
    //let image_data = JSON.parse(data);
    let image_data = data.body;
    this.article.image = image_data.image;
  }

}
