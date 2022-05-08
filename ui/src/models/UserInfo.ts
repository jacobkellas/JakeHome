export class UserInfo {
  constructor(
    public userId: string,
    public userDetails: number,
    public identityProvider: string,
    public userRoles: string[],
    public claims: object[]
  ) {}
}
