export class Report {
  constructor(
    public id: number = 0,
    public serialNumber: number = 0,
    public status: string = "",
    public traderName: string = "",
    public customerName: string = "",
    public phoneNumber: string = "",
    public government: string = "",
    public city: string = "",
    public orderCost: number = 0,
    public receivedAmount: number = 0,
    public shippingCost: number = 0,
    public paidShippingAmount: number = 0,
    public companyValue: number = 0,
    public date: string = "",
  ) {
  }
}
