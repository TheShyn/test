import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  check='buttonSearch'
  color='red'
  classes ='class-1 class-2'
  inputValue:any = '';
  obj:any = { name:"nguyenxtrungduc",age: 18}
  array:any = [
    {
      name: "cake 1",
      desctiption : "lorem Ipsum  dolor sit amet, consectetur adipiscing elit",
      img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
      sale: true
    },
    {
      name: "cake 2",
      desctiption : "lorem Ipsum  dolor sit amet, consectetur adipiscing elit",
      img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
    },
    {
      name: "cake 3",
      desctiption : "lorem Ipsum  dolor sit amet, consectetur adipiscing elit",
      img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
    }
  ];
  search (search:any){
    if(!search){
      return alert(`Product not found`)

    }
    let isExist = this.array.filter((item:any)=>{
      return item.name.includes(search)
    })
    if(isExist.length > 0){
      return alert(`Find ${isExist.length} element`)
    }else{
      return alert(`Product not found`)

    }
  }
}
