export class UserAccount {
  constructor(
    public fullName:string = "",
    public userName: string  = "",
    public password: string = "",
    public confirmPassword: string = "",
    public email: string = "",
    public permissionId: number = 0
  ) {

  }
}
