export class InvalidArgument<T> extends Error {

  constructor(target: string, value: T) {
    super(`<${target}> does not allow the value <${value}>`);
  }
}
