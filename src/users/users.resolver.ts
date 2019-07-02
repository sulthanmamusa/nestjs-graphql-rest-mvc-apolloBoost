import { Resolver, Query } from "@nestjs/graphql";
import { UsersService } from "./users.service";

@Resolver('users')
export class UsersResolver {
    constructor(private usersService: UsersService){}
    
    @Query('users')
    findAll(){
        return this.usersService.findAll();
    }
}