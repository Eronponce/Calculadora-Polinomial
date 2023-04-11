var numeros = []
//Obtem o elementos 
function getElements(){
  document.getElementById("result").innerHTML = "";
  var vetorValores = []
  
  for(var x = -1000 ; x<1000; x++){
    var positivo = 1
    for(i=1;i<=11; i++){
      
      if(document.getElementById("numero"+i).value != ''){
    
      positivo = eval(positivo + (document.getElementById("numero"+i).value * ( x** (11-i) ) ) )
        
      }
    }
   
    if(positivo > 0){
      vetorValores[x] = 1;
      }else{
      vetorValores[x] = 0;
      }
      
  }
  var contador = 0;
  var texto = "";
  vetorResultados = [];
  for(j = -9; j<10;j++){
    
    if(vetorValores[j-1] != vetorValores[j] && j-1 !== undefined){
      texto = ("xϵ["+(j-1) +" ; "+ j+"]") ;
      contador++;
      let ul = document.createElement("ul");
      ul.setAttribute('id',('tabela'+contador));
      ul.innerHTML = texto;
      document.getElementById("result").appendChild(ul);
      vetorResultados[contador] = [j-1,j];
    }
  }

  Epsilon = 10**(document.getElementById("epsilon").value)
  contadorTabela = 1

  while(contador > 0){
    contador--;
    tabela = document.getElementById("tabela"+contadorTabela);
    
    bolzanoTheorem(f,vetorResultados[contadorTabela][0],vetorResultados[contadorTabela][1],Epsilon,contadorTabela);
    contadorTabela++;
  }
  
}

function f(x){
  result = 1;
   for(i=1;i<=11; i++){
      
      if(document.getElementById("numero"+i).value != ''){
      result = eval(result + (document.getElementById("numero"+i).value * ( x** (11-i) ) ) )
        
      }
    }
  return(result);
}


function bolzanoTheorem(f, PrimeiroNumero, SegundoNumero, epsilon,contador) {

  let Meio = (PrimeiroNumero + SegundoNumero) / 2; 
  let FMeio = f(Meio); 
  let numIterations = 0; 
  
  while (Math.abs(SegundoNumero - PrimeiroNumero) >= epsilon && FMeio !== 0) {
    if (f(PrimeiroNumero) * FMeio < 0) {
       PrimeiroNumero = Meio;
    } else {
      SegundoNumero = Meio;
    }
    let li = document.createElement("li");
    li.innerHTML = ("xϵ["+PrimeiroNumero +" ; "+ SegundoNumero+"]") ;;
    document.getElementById("tabela"+contador).appendChild(li);
    Meio = (PrimeiroNumero + SegundoNumero) / 2;
    FMeio = f(Meio);
    numIterations++;
  }
}

