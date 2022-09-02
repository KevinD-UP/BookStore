import {Entity} from "./Entity";
import {Email} from "../ValueObjects/Email";
import {Username} from "../ValueObjects/Username";

interface IUserProps {
    name: Username;
    email: Email;
}

class User extends Entity<IUserProps> {
    get name(): Username {
        return this.props.name;
    }

    get email(): Email {
        return this.props.email;
    }

    private constructor (props: IUserProps, id?: string) {
        super(props, id);
    }

    public static createUser (props: IUserProps, id?: string) : User {
        if(props.email && props.name){
            return new User(props)
        }
        throw new Error()
    }
}