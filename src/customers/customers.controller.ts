import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { CustomersService } from "./customers.services";

@Controller('customers')
export class CustomersController {
    constructor(
        private customersService: CustomersService
    ){}

    @Get()
    findAll(){
        return this.customersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.customersService.findOne(id);
    }

    @Post()
    createCustomer(@Body('customer') customer: {}){
        return this.customersService.createCustomer(customer);
    }
    
    @Put(':id')
    updateCustomer(@Param('id') id: number, @Body('customer') customer: {}){
        return this.customersService.updateCustomer(id, customer);
    }

    @Delete(':id')
    deleteCustomer(@Param('id') id: number) {
        return this.customersService.deleteCustomer(id);
    }
}