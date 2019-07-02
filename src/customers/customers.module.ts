import { Module } from "@nestjs/common";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.services";

@Module({
    imports: [],
    controllers: [CustomersController],
    providers: [CustomersService]
})
export class CustomersModule {}