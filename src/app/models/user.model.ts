export class UserEntry{
    private username: string;
    private email: string;
    private password: string;
    private image: string;
    public constructor(  username:string,email:string, password:string, image:string){
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image;
    }

    public getUsername():string{
        return this.username;
    }

    public getImage():string{
        return this.image;
    }

    public getEmail():string{
        return this.email;
    }

    public getPassword(): string{
        return this.password;
    }
}