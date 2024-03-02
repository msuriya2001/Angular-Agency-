import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'; 
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-adding-products',
  templateUrl: './adding-products.component.html',
  styleUrl: './adding-products.component.css'
})
export class AddingProductsComponent implements OnInit{

  addProductsForm: FormGroup;

  ngOnInit(): void {
    
    this.addProductsForm = new FormGroup({

    productsArray:new FormArray([

       // this is the form for products 

      new FormGroup({

        Name:new FormControl(null), 
        Price:new FormControl(null),
        Category:new FormControl(null), 
        Available:new FormControl(null)

      })

      
    ])


    })


  }

  

  AddNewProduct(){

    const newProduct = new FormGroup({

      Name:new FormControl(null), 
      Price:new FormControl(null),
      Category:new FormControl(null), 
      Available:new FormControl(null)

    });



    (<FormArray>this.addProductsForm.get('productsArray')).push(newProduct);





  }

  SubmitForm(){


    
  }


}
