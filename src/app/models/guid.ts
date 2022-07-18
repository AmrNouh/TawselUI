import { Guid } from "guid-typescript";

export class GUID {
    public serialNumber: Guid;
    constructor() {
        this.serialNumber = Guid.create(); 
    }
}
