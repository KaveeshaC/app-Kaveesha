import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public items:Item[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<Item>('http://localhost/aa/store.php').subscribe(data =>{
      Object.values(data).forEach(element =>{
        this.items.push(new Item(element.name,element.price));
      })
      console.log(this.items);
    },
      err=>{
        console.log("Error");
      }

    );}

}


interface Item{
  
  name: string;
  price:number;
}

class Item{

  constructor(name:string,price:number){
    this.name=name;
    this.price=price;
  }

}