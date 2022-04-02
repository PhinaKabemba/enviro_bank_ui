export class Account {
    id : number | undefined;
    accountNum: string | undefined;
    balance!: number;
    customerNum: string | undefined;
    overdraft: number = 0;
}
