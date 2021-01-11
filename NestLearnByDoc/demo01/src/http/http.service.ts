import { Inject, Injectable, Optional } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
    @Inject('HttpOptionsService')
    @Optional()
    private readonly serviceInjectedByField: T;

    // private readonly opt: string;
    constructor( @Optional()@Inject('HttpOptionsService')  private readonly opt: T){}
    // constructor(@Optional()@Inject('HTTP_OPTIONS')  opt:string){
    //     this.opt = opt;
    // }

    public test(){
        console.log(this.opt);
        return this.opt;
    }
    public test2(){
        console.log(this.serviceInjectedByField);
        return this.serviceInjectedByField;
    }
}
