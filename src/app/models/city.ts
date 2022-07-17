export class City {
  private _normalShippingCost: number = 0;

  constructor(
    public id : number = 0,
    public governmentId:number,
    public name:string,
    public costpercity:number=0
  ) {
  }

  get normalShippingCost(): number {
    return this._normalShippingCost;
  }
  set normalShippingCost(value: number) {
    this._normalShippingCost = value;
  }
}
