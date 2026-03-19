import { Controller, Get } from "@nestjs/common";
import { RoleService } from "./roles.service";

@Controller('roles')
export class RoleController{
    constructor (private readonly roleService:RoleService) {}

    @Get()
    getHello():string{
        return this.roleService.getHello();
    }
}
