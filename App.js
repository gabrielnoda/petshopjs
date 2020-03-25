const express = require('express')
const app = express()
const port = 3000;
const mysql = require('mysql');


app.listen(port, () => {

    class Pessoa {
        constructor(nome, email) {
            this.nome = nome;
            this.email = email;
            this.telefone = [];
            this.endereco = {};
        }
    }

    class Cliente extends Pessoa {
        constructor(nome, email, cpf) {
            super(nome, email)
            this.cpf = cpf
        }
    }

    class Fornecedor extends Pessoa {
        constructor(nome, email, cnpj) {
            super(nome, email)
            this.cnpj = cnpj
        }
    }

    class Endereco {
        constructor(rua, numero, bairro, cep, cidade, estado, complemento) {
            this.rua = rua;
            this.numero = numero;
            this.bairro = bairro;
            this.cep = cep;
            this.cidade = cidade;
            this.estado = estado;

            if (complemento) {
                this.complemento = complemento;
            } else {
                this.complemento = '';
            }
        }


    }
    class Telefone {
        constructor(ddi, ddd, numero, descricao) {
            if (ddi == undefined) {
                this.ddi = 55;
            }
            this.ddi = ddi;
            this.ddd = ddd;
            this.numero = numero;
            this.descricao = descricao;
        }

    }

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "PETSHOP"
      });
      console.log('Initialized..');

//----------------------------------------------------------------------------------------------------------------

var cliente1 = new Cliente('Gabriel', 'email@gmail.com', '111.111.111-11');
cliente1.sobrenome = 'Lucas';
var endereco1 = new Endereco('87014-150' , 'Rua Rodrigo Silva', '339', 'Zona 04', 'Ap', 'Maringá', 'Paraná');
cliente1.endereco = endereco1;
console.log(cliente1);

var cliente2 = new Cliente('Leonardo', 'leonoda@gmail.com', '222.222.222-22')
cliente2.telefone = '449999999';

console.log(`Nome: ${cliente2.nome} \nEmail: ${cliente2.email} \nTelefone: ${cliente2.telefone}\n`);

//----------------------------------------------------------------------------------------------------------------

var fornecedor1 = new Fornecedor('Helton', 'ton@gmail.com', '333.333.333.333');
fornecedor1.nomeFantasia = 'Ton Entrega';

var fornecedor2 = new Fornecedor('Heloise', 'helofarms@gmail.com', '1213321');

console.log(`Nome: ${fornecedor1.nome} \nCNPJ: ${fornecedor1.cnpj} \nNome Fantasia: ${fornecedor1.nomeFantasia}\n`)
//----------------------------------------------------------------------------------------------------------------

})

