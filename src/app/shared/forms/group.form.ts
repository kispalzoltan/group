import { FormArray, FormGroup, FormControl } from '@angular/forms';

export function getGroupForm(): FormGroup {
    return new FormGroup({
        id: new FormControl(),
        identifier: new FormArray([
            new FormGroup({
                use: new FormControl(),
                value: new FormControl()
            })
        ]),
        active: new FormControl(),
        type: new FormArray([
            new FormGroup({
                title: new FormControl(),
                creation: new FormControl()
            })
        ]),
        name: new FormControl(),
        quantity: new FormControl()

    });
}


