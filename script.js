class InformacoesUsuario {
    constructor(nome, idade, classe, tipoEscolhido) {
      this.nome = nome;
      this.idade = idade;
      this.classe = classe;
      this.tipoEscolhido = tipoEscolhido;
    }
  }
  
  let info = new InformacoesUsuario("Davi", "14", "Ninja", "Mago");
  let ataque = info.tipoEscolhido;
  let mensagemAtaque;
  
  switch (ataque) {
    case "Mago":
      mensagemAtaque = "Usou magia";
      break;
    case "Guerreiro":
      mensagemAtaque = "Usou espada";
      break;
    case "Monge":
      mensagemAtaque = "Usou artes marciais";
      break;
    case "Ninja":
      mensagemAtaque = "Usou shuriken's";
      break;
    default:
      mensagemAtaque = "Usou um ataque desconhecido";
  }
  
  console.log(`O ${info.classe} atacou usando ${mensagemAtaque}`);