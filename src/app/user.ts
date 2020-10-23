import { usr_Type } from './usr_Type';

export class User {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    
    title: string;
    usr_Type: usr_Type;
    setUsrType(usrType:usr_Type){
        this.usr_Type = usrType;
    }






}
