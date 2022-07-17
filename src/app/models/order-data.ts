export class OrderData {
    constructor(
        public serialNumber: string = "",
        public date: string="",
        public Cost: number = 0,
        public stateId: number = 0,
        public cityId: number = 0,
        public clientId: number = 0,
        public shipId: number = 0,
        public cashId: number = 0,
        public statusId: number = 0,
        public weight: number = 0,
        public orderType: number = 0,
        public userId: string = ""
    ) { }
}

