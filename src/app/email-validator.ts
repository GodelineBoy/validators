import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    
    const emailRegex = RegExp('(@)');
    const valid = emailRegex.test(control.value);

    const errors ={
        email: {
            rules: 'email non valide'
        }
    };
    return !valid ? errors : null; 
}