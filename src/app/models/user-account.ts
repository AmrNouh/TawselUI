export class UserAccount {
  constructor(
    public full_Name:string = "",
    public userName: string  = "",
    public password: string = "",
    public email: string = "",
    public permissionId: number = 0
  ) {

  }
}
