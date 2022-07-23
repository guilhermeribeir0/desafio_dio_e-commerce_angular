import { BookService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.livros = this.bookService.readBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))

  }

}
