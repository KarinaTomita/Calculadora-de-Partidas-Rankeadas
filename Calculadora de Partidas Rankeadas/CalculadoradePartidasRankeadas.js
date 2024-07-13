
Vitorias = 30
Derrotas = 6
contadorDeVitoria = 0
saldoDeRankeadas = (".")


function contadorDeVitorias (A , B){
    contadorDeVitoria = A - B

}
contadorDeVitorias(Vitorias,Derrotas)

// switch que mostra o elo do jogador
switch (true){
    case contadorDeVitoria <= 10:
        saldoDeRankeadas = ("Ferro")
        break;
        case contadorDeVitoria <= 20:
            saldoDeRankeadas = ("Bronze")
            break;
            case contadorDeVitoria <= 50:
                saldoDeRankeadas = ("Prata")
                break;
                case contadorDeVitoria <= 80:
                    saldoDeRankeadas = ("Ouro")
                    break;
                    case contadorDeVitoria <=90:
                        saldoDeRankeadas = ("Diamante")
                        break;
                        case contadorDeVitoria <= 100:
                            saldoDeRankeadas =("Lendário")
                            break;
                            case contadorDeVitoria >= 101:
                                saldoDeRankeadas = ("Imortal")
                                break;
                                default: saldoDeRankeadas =("bugado")

}
// saida

console.log ("O herói tem de saldo de " + contadorDeVitoria + " está no nível de " + saldoDeRankeadas)