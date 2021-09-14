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
    {Id:1,Name:"Trial", Surname:"Trial", Phone:5301002020},
    {Id:2,Name:"Trial", Surname:"Trial", Phone:5301002020},
    {Id:3,Name:"Trial", Surname:"Trial", Phone:5301002020},
    {Id:4,Name:"Trial", Surname:"Trial", Phone:5301002020},
    {Id:5,Name:"Trial", Surname:"Trial", Phone:5301002020},
    {Id:6,Name:"Trial", Surname:"Trial", Phone:5301002020},
    {Id:7,Name:"Trial", Surname:"Trial", Phone:5301002020}
  ]

  products: IProduct[]=[]
}
