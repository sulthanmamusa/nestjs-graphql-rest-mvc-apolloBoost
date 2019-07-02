import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomersService {
    customers = [];
    constructor(){}
    findAll(){
        return this.customers.filter(customer => customer);
    }

    findOne(id: number){
        return this.customers[id - 1];
    }

    createCustomer(customer: any){
        const totCust = this.customers.length;
        customer.id = totCust + 1;
        this.customers.push(customer);
        return this.customers[totCust];
    }

    updateCustomer(id: number, customer: any){
        Object.assign(this.customers[id - 1], customer);
        return this.customers[id - 1];
    }

    deleteCustomer(id: number) {
        delete this.customers[id - 1];
        return true;
    }
}