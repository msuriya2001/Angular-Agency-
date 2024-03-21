import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent implements OnInit {



  addProductsForm: FormGroup;

  ngOnInit(): void {
    
    this.addProductsForm = new FormGroup({

    productsArray:new FormArray([

       // this is the form for products 

      new FormGroup({

        Name:new FormControl(null,[Validators.required]), 
        Quantity:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
        // Available:new FormControl(null, [Validators.required , Validators.pattern("^[0-9]*$")]), 
        // Price:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")])

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
        Quantity:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
        // Available:new FormControl(null, [Validators.required , Validators.pattern("^[0-9]*$")]), 
        // Price:new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")])

  
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
// hello there with this app
