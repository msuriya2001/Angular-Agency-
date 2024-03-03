import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'; 
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { validateHeaderName } from 'http';

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

        Name:new FormControl(null,[Validators.required]), 
        Price:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
        Category:new FormControl(null, [Validators.required]), 
        Available:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")])

      })

      
    ])


    })


  }

  

  AddNewProduct(){

    if(!this.addProductsForm.valid){
      alert("Please check the following once !\n Price and Available column should be Number")

    }

    else{
      const newProduct = new FormGroup({

        Name:new FormControl(null,[Validators.required]), 
        Price:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
        Category:new FormControl(null, [Validators.required]), 
        Available:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")])
  
      });
  
  
  
      (<FormArray>this.addProductsForm.get('productsArray')).push(newProduct);

    }

 





  }

  SubmitForm(){


    if(!this.addProductsForm.valid){
      alert("Please check the following once !\n Price and Available column should be Number")

    }
    else{

      console.log(this.addProductsForm['controls']['productsArray']['controls']);

    }

    
  }




}
