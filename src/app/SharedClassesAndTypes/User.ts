export class User{
    constructor(
        public name:string,
        public email:string,
        public password:string,
        public confirm:string,
        public method:string
    ){}
}