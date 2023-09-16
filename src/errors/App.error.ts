// Define uma classe chamada AppError que estende a classe Error.
export class AppError extends Error {
  public status: number;

  // Construtor da classe, que aceita uma mensagem de erro e um status (400 por padrão).
  constructor(message: string, status: number = 400) {
    // Chama o construtor da classe Error com a mensagem de erro.
    super(message);

    // Define a propriedade 'status' com o valor do status fornecido.
    this.status = status;
  }
}
