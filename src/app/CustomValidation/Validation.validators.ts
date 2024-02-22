import { FormControl } from "@angular/forms";

export class CustomValidation {

    // this is a custom validation which helps to check wheather the given control is value has a space or not 

    static NoSpaceAllowed(control:FormControl){
        
        if(control.value != null && control.value.indexOf(' ') != -1 ){
            return {NoSpaceAllowed : true};
        } 

      
        return null;
        

    }



}