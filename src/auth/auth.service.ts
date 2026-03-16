import {Injectable} from '@nestjs/common';

@Injectable()
export class AuthService{
    getSL(): string{
        return 'Auth';
    }
}