import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    constructor(){}

    findAll(){
        return [
            {
                id: 1,
                name:'sulthan'
            },
            {
                id:2,
                name:'mamusa'
            }
        ]
    }
}