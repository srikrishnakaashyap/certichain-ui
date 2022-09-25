import { AbstractControl, ValidationErrors } from '@angular/forms';

export class allvalidators {

    static onlyNumbers( control: AbstractControl): ValidationErrors | null {
        var format = /^[1-9][0-9]+$/;

        if(!(format.test(control.value as string)))
            return { onlyNumbers: true};

        return null
    }

    static alphanumeric( control: AbstractControl): ValidationErrors | null {
        
        var format2 = /^[a-z0-9A-Z]+$/i;

        if(!(format2.test(control.value as string)))
            return { alphanumeric : true};
        
        return null
    }


    static spacename( control: AbstractControl): ValidationErrors | null {
        
        var format3 = /[a-zA-Z][a-zA-Z ]+/;

        if(!(format3.test(control.value as string)))
            return { spacename : true};
        
        return null
    }


    static forname( control: AbstractControl): ValidationErrors | null {
        
        var format4 = /^[\\p{L} .'-]+$/;

        if(!(format4.test(control.value as string)))
            return { forname : true};
        
        return null
    }


    static validateEmail(control: AbstractControl): ValidationErrors | null {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
            if( !(re.test(control.value as string)))
                return { validateEmail: true};
            

            return null
        
    }

}