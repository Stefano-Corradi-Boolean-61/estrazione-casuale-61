const classe61 = ['Domenico Agostino',
'Mihai Badia',
'Riccardo Becattini',
'Manuel Benini',
'Bruno Bernardini',
'Guido Buono',
'Pierluigi Cancellaro',
'Francesco Cataletto',
'Stefano Cravotta',
'Giovanni Crispino',
'Giancarlo Croce',
'Enrico De Stefano',
'Silvia Dugato',
'Carlo Duminuco Del Monte',
'Francesco Ercoli',
'Luca Gaddini',
'Marco Gagliano',
'Cristina Gasperini',
'Gabriele Giusti',
'Chiara Grillo',
'Manuela Ienuso',
'Michele Iliescu',
'Ketevan Jorjoliani',
'Renato Lami',
'Davide Manciucca',
'Emanuele Mastronardi',
'Luca Mazzarini',
'Daniele Monteleone',
'Salvatore Olivieri',
'Leonardo Pellegrini',
'Agostino Piquè',
'Davide Pizzolla',
'Antonio Pollo',
'Ivan Russo',
'Amanjit Singh',
'Sebastiano Visco'
];

const bottoneEstrai = document.getElementById('estrai');


// elenco di nomi estratti che di defaul è vuoto
const nomiEstratti = [];
bottoneEstrai.addEventListener('click', function(){

  let nomeEstratto; // mi serve per il check del ciclo do while
  let nome; // il nome che viene estratto

  do{
    bottoneEstrai.innerHTML = 'Estrai';

    // se ho cliccato alla fine su ricomincia l'array nomiEstratti sarà più lungo di quello originale
    // quindi lo svuoto
    if(nomiEstratti.length > classe61.length){
      // svuoto l'array
      while(nomiEstratti.length){
        console.log(nomiEstratti);
        console.log(nomiEstratti.length);
        console.log('--------------');
        nomiEstratti.pop();
      }
    }

    // se questo flag non cambia vuol dire che il nome non è stato mai estratto qundi non parte il ciclo
    nomeEstratto = false;
    let random = Math.floor(Math.random() * classe61.length);
    nome = classe61[random];

      
    console.log(nome);
    console.log(nomiEstratti);
    console.log("=============");

    // effettuo il controllo della presenza del nome estratto solo se l'array dei nomi estratti è inferione a quello originale
    // se non faccio questo controllo dopo aver stratto tutti i nomi creerei un loo infinito
    if(nomiEstratti.length < classe61.length){
      for(let i = 0; i < nomiEstratti.length; i++){
      // se il nome estratto è uguale a un elemento dei nomei stratti
      // memorizzo il date che è presente
        if(nome === nomiEstratti[i]){
          // il nome è stato estratto quindi ricomicierà il ciclo
          nomeEstratto = true;
          console.log('PRESENTE');
        }
      }
    }else{
      // imposto l'output per ricominciare
      nome = "Nomi esauriti";
      bottoneEstrai.innerHTML = 'Ricomincia';
    }
    
    if(!nomeEstratto){
      // se nonè stato estratto il nome lo pusho
      nomiEstratti.push(nome);
    }
    
    console.log(nomiEstratti);
  }while(nomeEstratto)

  document.getElementById('nome-estratto').innerHTML = nome;

  

});



/// logica per cacolare il nome più lungo
let nomePiuLungo = '';

for(let i = 0; i < classe61.length; i++){
  //console.log(classe61[i],classe61[i].length);
  if(classe61[i].length > nomePiuLungo.length){
    nomePiuLungo = classe61[i];
   // console.log('nomePiuLungo',nomePiuLungo);
  }
}
//console.log('--->>>>> nomePiuLungo',nomePiuLungo);


