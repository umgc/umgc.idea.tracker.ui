import { User } from './user';

export class project {
    id: number;
    project_title: string;
    project_description: string;
    project_website: string;
    comment: string;
    user: User;
    setUser( user:User){
        this.user=user;
        
    }

}
