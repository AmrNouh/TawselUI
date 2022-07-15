export class City {
  private _normalShippingCost: number = 0;

  constructor(
    public governmentId:number,
    public name:string
  ) {
  }

  get normalShippingCost(): number {
    return this._normalShippingCost;
  }
  set normalShippingCost(value: number) {
    this._normalShippingCost = value;
  }
}
