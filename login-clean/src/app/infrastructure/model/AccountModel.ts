import { Validators } from "@angular/forms"

export const accountModelLogin = {
    emailAtribute: ['pas@or.com', [Validators.required, Validators.email]],
    passwordAtribute: ['password', [Validators.required]],
}