interface IInputModel {
  input1: string
  input2: string
  input3: string
}

export class InputModel implements IInputModel {
  constructor(
    public input1: string,
    public input2: string,
    public input3: string
  ) {}
}
