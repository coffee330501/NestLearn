import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';

@Injectable()
export class CatsService {
    private readonly cats: CreateCatDto[]=[];

    create(cat: CreateCatDto){
        this.cats.push(cat);
    }
    findAll(): CreateCatDto[]{
        return this.cats;
    }
}
