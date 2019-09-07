import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Aluno } from '../Models/Aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'controle-alunos';
  public alunosTotal: Aluno[];
  public alunosFiltro: Aluno[];
  public textFind: string;

  constructor(
    public fireStore: AngularFirestore,
  ) {
    this.alunosTotal = new Array();
    this.alunosFiltro = new Array();

    this.getAllAlunos();
  }

  public getAllAlunos(): void {


    this.fireStore.collection('Alunos').ref
      .get()
      .then(values => {

        values.forEach(a => {
          this.alunosTotal.push(a.data() as Aluno);
        });

        this.alunosFiltro = this.alunosTotal;
        console.log(this.alunosFiltro)

    }).catch(err => {
      console.error('Falha ao buscar a lista de alunos', err);
    })

  }

  public findAluno(event) {

    console.log(this.textFind);

     //TODO
    // if (event.t.le < 5)
    // return

    //TODO: ajustar para pegar a string do evento
    this.alunosFiltro = this.alunosTotal.filter( a =>  a.Nome.indexOf(this.textFind));

  }

  // getMessages( raAluno: any): Promise<Message[]> {

  //   return new Promise((resolve) => {

  //         this.fireStore.collection('Alunos')
  //         .doc(raAluno)
  //         .orderBy('timestamp', 'desc')
  //         .onSnapshot(snps => {

  //           const messages = [];

  //           snps.forEach(snp => {

  //             const message = snp.data() as Message;

  //             if (message) {
  //               messages.push(message);
  //             }

  //           });
  //           console.log(messages);
  //           resolve(messages);

  //         });

  //   });

  // }

  create(aluno: Aluno): Promise<boolean> {

    return new Promise((resolve, reject) => {


      /* cria um GUID generico */
      const raAluno =  this.fireStore.createId();

      this.fireStore.collection('Alunos')
      .doc(raAluno)
        .set(aluno)
        .then(() =>  resolve(true))
        .catch(err => {console.error('Falha ao incluir a mensagem', err); reject(false); });


    });

  }


}
