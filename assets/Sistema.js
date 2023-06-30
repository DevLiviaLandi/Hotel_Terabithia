// Sistema de um hotel desenvolvido em javascript.
// A senha de acesso é 2678, para realizar o login e ter as interações.

var nome_hotel = prompt('Insira o nome do hotel:');
alert(`O nome do Hotel é ${nome_hotel}!`);
var user = prompt('Insira o seu nome:');

senha();

function senha() {
    var senha = prompt(`${user}, qual sua senha de funcionário?`);

    if (senha < 2678 || senha > 2678){
        alert('Senha incorreta, operação não autorizada!')
        senha();
    } else {
        alert(`Bem vindo ao Hotel ${nome_hotel}, ${user}. É um imenso prazer ter você por aqui!`)
        inicio();
    }
}

function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção: \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Reserva de Eventos \n4.) Abastecimento de Carros \n5.) Manutenção \n6.) Sair'));

    switch (escolha){
        case 1 :
            reserva_quartos();
            break;
        case 2 :
            cadastro_hospedes();
            break;
        case 3 :
            reserva_eventos();
            break;
        case 4 :
            abastecer_carros();
            break;
        case 5 :
            manutencao();
            break;
        case 6 :
            sair();
            break;
        default :
            erro();
    }
}		

function reserva_quartos() {
    var valor_diaria = parseFloat(prompt('Qual é o valor padrão da diária?'));

    if (valor_diaria <= 0){
        alert('Reserva não efetuada, valor incorreto.');

        reserva_quartos();
    } else {
        var dias = parseInt(prompt('Quantas diárias serão necessárias?'));
    }

    if (dias <= 0 || dias > 30) {
        alert('Reserva não efetuada, não aceitamos menos de 1 dia ou mais de 30 dias.');

        reserva_quartos();
    } else {
        var calc_daily = (valor_diaria * dias);
    }

    alert(`O valor de ${dias} dias de hospedagem é de R$${calc_daily}.`);

    var nome_hospede = prompt('Qual é o nome do hóspede?');
    var resposta = prompt(`${user}, você confirma a hospedagem para ${nome_hospede} por ${dias} dias? S/N`);

    if (resposta == 'S' || resposta == 's') {
        alert(`${user}, reserva efetuada para ${nome_hospede}. O valor total é de R$${calc_daily}.`);
        
        inicio();
    } else if (resposta == 'N' || resposta == 'n') {
        alert(`${user}, reserva não efetuada.`);

        inicio();
    }
}

function cadastro_hospedes() {
    var lista = [];

    function escolha(){
        var choose = parseInt(prompt('Selecione uma opção: \n1.) Cadastrar \n2.) Pesquisar \n3.) Sair'));

        switch(choose){
            case 1 :
                cad();
                break;
            case 2 :
                pesquisa_hospede();
                break;
            case 3 :
                inicio();
                break;
            default :
                falha();
        }
    }
    
    function cad(){
        var valor_diaria = parseFloat(prompt('Qual é o valor padrão da diária?'));

        if (valor_diaria <= 0){
            alert('Reserva não efetuada, valor incorreto.');
    
            escolha();
        } else {
            var dias = parseInt(prompt('Quantas diárias serão necessárias?'));
        }

        if (dias <= 0 || dias > 30) {
            alert('Reserva não efetuada, não aceitamos menos de 1 dia ou mais de 30 dias.');
    
            escolha();
        } else {
            var nome_hospede = prompt('Qual é nome do hóspede?');
        
            if (lista.length <= 15){
                lista.push(nome_hospede);

                var idade_hospede = parseInt(prompt('Qual é a idade do hóspede?'));

                    if(idade_hospede <= 6){
                        var resultado = ((valor_diaria * dias) * 0);
                        alert(`${nome_hospede} cadastrada(o) com sucesso e possui gratuidade.\nO valor total da hospedagem é: R$${resultado} por ${dias} dias.`);
                    } else if(idade_hospede >= 60) {
                        var resultado = ((valor_diaria * dias)/2);
                        alert(`${nome_hospede} cadastrada(o) com sucesso e paga meia.\nO valor total da hospedagem é: R$${resultado} por ${dias} dias.`);
                    } else {
                        var resultado = (valor_diaria * dias);
                        alert(`${nome_hospede} cadastrada(o) com sucesso.\nO valor total da hospedagem é: R$${resultado} por ${dias} dias.`)
                    }

                escolha();
            } else if (lista.length > 15) {
                alert('Máximo de cadastros atingido.');

                escolha();
            }
        }
    }

    function pesquisa_hospede() {
        var pesquisa = prompt('Qual é nome do hóspede?');
        var indice = lista.indexOf(pesquisa);

        if (indice !== -1) {
            alert(`Hóspede ${pesquisa} foi encontrada(o)!`);
            
            escolha();
          } else {
            alert(`Hóspede ${pesquisa} não foi encontrada(o)!`);

            escolha();
          }
    }

    function falha() {
        alert('Por favor, informe um número entre 1 e 3');
        escolha();
    }

    escolha();
}

function reserva_eventos() {

    function escolha(){
        var choose = parseInt(prompt('Selecione uma opção: \n1.) Cadastrar Evento \n2.) Reserva do Buffet \n3.) Reserva do Auditório \n4.) Reserva do Restaurante \n5.) Sair'));

        switch(choose){
            case 1 :
                eventos_cadastro();
                break;
            case 2 :
                reserva_buffet();
                break;
            case 3 :
                reserva_auditorio();
                break;
            case 4 :
                reserva_restaurante();
                break;
            case 5 :
                inicio();
                break;
            default :
                falha();
        }
    }

    function eventos_cadastro(){
        var garcons = 10.50;

        var duracao = parseInt(prompt('Qual a duração do evento em horas?'));
        var trabalho = parseInt(prompt('Quantos garçons serão necessários?'));
        var calc_garcons = ((garcons * trabalho) * duracao);

        alert(`Custo total: R$${calc_garcons}`);
        var confirma = prompt('Gostaria de efetuar a reserva? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert(`${user}, reserva efetuada com sucesso.`);

            escolha();
        } else if (confirma == 'N' || confirma == 'n'){
            alert(`Reserva não efetuada.`);

            escolha();
        }
    }

    function reserva_buffet(){
        var cafe_convidado = 0.2;
        var agua_convidado = 0.5;
        var salgado_convidado = 7;

        var qnts_convidados = parseInt(prompt('Qual o número de convidados para o evento?'));

        if (qnts_convidados > 350){
            alert('Quantidade de convidados superior à capacidade máxima, suporta apenas 350 convidados.');

            escolha();
        } else {
            var calc_cafe = parseInt(cafe_convidado * qnts_convidados);
            var calc_agua = parseInt(agua_convidado * qnts_convidados);
            var calc_salgado = Math.ceil((salgado_convidado * qnts_convidados)/100);
            var total = ((calc_cafe * 0.8) + (calc_agua * 0.4) + (calc_salgado * 34));

            alert(`O evento precisará de ${calc_cafe} litros de café, ${calc_agua} litros de água, ${calc_salgado * 100} salgados. O custo total do evento será de R$${total}.`);

            var confirma = prompt('Gostaria de efetuar a reserva? S/N');

            if (confirma == 'S' || confirma == 's'){
                alert(`${user}, reserva efetuada com sucesso.`);

                escolha();
            } else if (confirma == 'N' || confirma == 'n'){
                alert(`Reserva não efetuada.`)

                escolha();
            }

        }


    }

    function reserva_auditorio(){
        var auditorio_laranja = 150;
        var auditorio_colorado = 350;

        var qnts_convidados = parseInt(prompt('Qual o número de convidados para o evento?'));

        if (qnts_convidados > auditorio_colorado){
            alert('Quantidade de convidados superior à capacidade máxima, suporta apenas 350 convidados.');

            escolha();
        } else {
            if (qnts_convidados <= 150){
                alert('Use o auditório Laranja');

                var confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${user}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            } else if (qnts_convidados <= 220){
                var calc_laranja = (qnts_convidados - auditorio_laranja);
                
                alert(`Use o auditório Laranja (inclua mais ${calc_laranja} cadeiras)`);

                var confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${user}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            } else if (qnts_convidados > 220) {
                alert(`Use o auditório Colorado`);

                var confirma = prompt('Gostaria de efetuar a reserva? S/N');

                if (confirma == 'S' || confirma == 's'){
                    alert(`${user}, reserva efetuada com sucesso.`);

                    escolha();
                } else if (confirma == 'N' || confirma == 'n'){
                    alert(`Reserva não efetuada.`)

                    escolha();
                }

            }
        }
    }

    function reserva_restaurante(){
        var dia_inicio = 7;
        var dia_final = 23;
        var fds_inicio = 7;
        var fds_final = 15;

        var reserva = prompt('Qual o dia do seu evento? \n1.) Segunda \n2.) Terça \n3.) Quarta \n4.) Quinta \n5.) Sexta \n6.) Sábado \n7.) Domingo \n8.) Sair');

       switch(reserva){
            case 1 :
                segunda();
                break;
            case 2 :
                terça();
                break;
            case 3 :
                quarta();
                break;
            case 4 :
                quinta();
                break;
            case 5 :
                sexta();
                break;
            case 6 :
                sabado();
                break;
            case 7 :
                domingo();
                break;
            case 8 :
                eventos_cadastro();
            default :
                error();
       }

       function segunda(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < dia_inicio || hora > dia_final){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Segunda às ${hora}hs.`);

                    escolha();
                }
       }

       function terça(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < dia_inicio || hora > dia_final){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Terça às ${hora}hs.`);

                    escolha();
                }
       }

       function quarta(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < dia_inicio || hora > dia_final){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Quarta às ${hora}hs.`);

                    escolha();
                }
       }

       function quinta(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < dia_inicio || hora > dia_final){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Segunda às ${hora}hs.`);

                    escolha();
                }
       }

       function sexta(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < dia_inicio || hora > dia_final){
                    alert('Restaurante indisponível, dia da semana funcionamos das 7h até 23h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Sexta às ${hora}hs.`);

                    escolha();
                }
       }

       function sabado(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < fds_inicio || hora > fds_final){
                    alert('Restaurante indisponível, final da semana funcionamos das 7h até 15h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Sábado às ${hora}hs.`);

                    escolha();
                }
       }

       function domingo(){
        var hora = parseInt(prompt('Qual a hora do seu evento?'));

                if (hora < fds_inicio || hora > fds_final){
                    alert('Restaurante indisponível, final da semana funcionamos das 7h até 15h.');
                    
                    escolha();
                } else {
                    var empresa = prompt('Qual o nome da empresa?');
                    alert(`Restaurante reservado para ${empresa}. Domingo às ${hora}hs.`);

                    escolha();
                }
       }

       function error(){
        alert('Escolha um número de 1 a 8:');

        reserva_restaurante();
       }
    }

    function falha() {
        alert('Por favor, informe um número entre 1 e 3');
        
        escolha();
    }

    escolha();
}

function abastecer_carros() {
    var wayne_alcool = parseFloat(prompt('Qual o valor do álcool no posto Wayne Oil?'));
    var wayne_gasolina = parseFloat(prompt('Qual o valor da gasolina no posto Wayne Oil?'));
    var stark_alcool = parseFloat(prompt('Qual o valor do álcool no posto Stark Petrol?'));
    var stark_gasolina = parseFloat(prompt('Qual o valor da gasolina no posto Stark Petrol?'));
    var tanque = 42;

    if (wayne_alcool < wayne_gasolina || wayne_alcool < stark_alcool || wayne_alcool < stark_gasolina){
        var calc_alcool = parseFloat(wayne_alcool * tanque)

        alert(`${user}, é mais barato abastecer com álcool no posto Wayne Oil \nO valor total para encher o tanque é R$${calc_alcool}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    } else if (wayne_gasolina < wayne_alcool || wayne_gasolina < stark_alcool || wayne_gasolina < stark_gasolina){
        var calc_gasolina = parseFloat(wayne_gasolina * tanque)

        alert(`${user}, é mais barato abastecer com gasolina no posto Wayne Oil \nO valor total para encher o tanque é R$${calc_gasolina}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    } else if (stark_alcool < wayne_alcool || stark_alcool < wayne_gasolina || stark_alcool < stark_gasolina){
        var calc_alcool = parseFloat(stark_alcool * tanque)

        alert(`${user}, é mais barato abastecer com álcool no posto Stark Petrol \nO valor total para encher o tanque é R$${calc_alcool}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    } else if (stark_gasolina < wayne_alcool || stark_gasolina < wayne_gasolina || stark_gasolina < stark_alcool){
        var calc_gasolina = parseFloat(wayne_gasolina * tanque)

        alert(`${user}, é mais barato abastecer com gasolina no posto Stark Petrol \nO valor total para encher o tanque é R$${calc_gasolina}.`);
        var confirma = prompt('Você deseja abastecer? S/N');

        if (confirma == 'S' || confirma == 's'){
            alert('Abastecimento realizado com sucesso.');

            inicio();
        } else if (confirma == 'N' || confirma == 'n'){
            alert('Abastecimento cancelado.');

            inicio();
        }
    }
}

function manutencao() {
    var nome_empresa = [];
    var valor = [];
    var start = '';
    var final = 'N'

    while (start != final){
        var empresa = prompt('Qual é o nome da empresa?');
        nome_empresa.push(empresa);

        var preco = parseFloat(prompt('Qual o valor por aparelho?'));
        var qnts_aparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
        var desconto = parseInt(prompt('Qual a porcentagem de desconto?'));
        var min_aparelhos = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));

        if (qnts_aparelhos >= min_aparelhos){
            var calc_manutencao = (qnts_aparelhos * preco);
            var calc_desconto = (( calc_manutencao * desconto) / 100);
            var resultado = (calc_manutencao - calc_desconto);

            alert(`O serviço de ${empresa} custará R$${resultado}.`);
            valor.push(resultado);
        } else if (qnts_aparelhos < min_aparelhos){
            var calc_manutencao = (qnts_aparelhos * preco);

            alert(`O serviço de ${empresa} custará R$${calc_manutencao}.`);
            valor.push(calc_manutencao);
        }

        var continuar = prompt(`Deseja informar novos dados, ${user}? (S/N)`);

        if (continuar == 'N' || continuar == 'n'){
            var start = 'N';
        } else if (continuar == 'S' || continuar == 's'){
            var start = '';
        }
    }

        var menor_orcamento = Math.min(...valor);
        var posicao = valor.indexOf(menor_orcamento);
        var name_empresa = nome_empresa[posicao];
        alert(`O orçamento de menor valor é o de ${name_empresa} por R$${menor_orcamento}.`);
        inicio();

}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo, ${user}.`)
        window.close();
    } else {
        inicio();
    }
}