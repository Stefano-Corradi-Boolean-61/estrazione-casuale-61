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

//console.log('classe61.length',classe61.length);

let nomePiuLungo = '';

for(let i = 0; i < classe61.length; i++){
  //console.log(classe61[i],classe61[i].length);
  if(classe61[i].length > nomePiuLungo.length){
    nomePiuLungo = classe61[i];
   // console.log('nomePiuLungo',nomePiuLungo);
  }
}
//console.log('--->>>>> nomePiuLungo',nomePiuLungo);

const bottoneEstrai = document.getElementById('estrai');


// elenco di nomi estratti che di defaul è vuoto
const nomiEstratti = [];
bottoneEstrai.addEventListener('click', function(){

  let random = Math.floor(Math.random() * classe61.length);
  const nome = classe61[random];
  console.log(nome);
  console.log(nomiEstratti);
  console.log("=============");
  
  // di dafault stabilisco che il mio nome non sia presnte
  let nomePresente = false;
  // cerco il nome estratto dentro l'array dei nomi estratti
  for(let i = 0; i < nomiEstratti.length; i++){
    // se il nome estratto è uguale a un elemento dei nomei stratti
    // memorizzo il date che è presente
    if(nome === nomiEstratti[i]){
      nomePresente = true;
    }
  }

  // se il nome non è presente lo pusho nell'array e lo stampo
  if(!nomePresente){
    nomiEstratti.push(nome);
    console.log(nome);
    document.getElementById('nome-estratto').innerHTML = nome;
  }else{
    // se non è presente genero un altro output
    document.getElementById('nome-estratto').innerHTML = 'Nome presente, estraine un\'altro';
  }

  

});





