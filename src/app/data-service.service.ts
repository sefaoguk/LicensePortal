import { Injectable } from '@angular/core';

export interface ICustomer{
  Id: number
  Name: string
  Surname:string
  Phone:number
}

export interface IProduct{
  name:string
  description:string
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  customers:ICustomer[] = [
    {Id:1,Name:"FATMA", Surname:"KOYUNCU", Phone:5350852717},
    {Id:2,Name:"FATMA", Surname:"KOYUNCU", Phone:5350852717},
    {Id:3,Name:"FATMA", Surname:"KOYUNCU", Phone:5350852717},
    {Id:4,Name:"FATMA", Surname:"KOYUNCU", Phone:5350852717},
    {Id:5,Name:"FATMA", Surname:"KOYUNCU", Phone:5350852717},
    {Id:6,Name:"FATMA", Surname:"KOYUNCU", Phone:5350852717},
    {Id:7,Name:"FATMA", Surname:"KOYUNCU", Phone:5350852717}
  ]

  products: IProduct[]=[]
}
