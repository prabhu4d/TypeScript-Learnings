function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
let code = 300;
generateError("An Error Occurred", code);
