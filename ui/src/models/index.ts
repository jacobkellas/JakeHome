export class InputModel {
  constructor(
    public input1: string,
    public input2: string,
    public input3: string
  ) {}
}

export class UserInfo {
  constructor(
    public userId: string,
    public userDetails: number,
    public identityProvider: string,
    public userRoles: string[],
    public claims?: object[]
  ) {}
}
