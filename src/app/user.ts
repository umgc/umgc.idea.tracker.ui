import { UsrType } from './usr-type';

export class User {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    
    title: string;
    UsrType: UsrType;
    setUsrType(usrType:UsrType){
        this.UsrType = usrType;
    }






}
