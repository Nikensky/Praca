function suma(){
    let licz1 = Number(document.getElementById("liczba1").value);
    let licz2 = Number(document.getElementById("liczba2").value);
    let licz3 = Number(document.getElementById("liczba3").value);
   
   
        document.getElementById("formresult").innerHTML = "suma wyniku: "+((licz1)+(licz2)+(licz3)); 
    


    
}

function srednia(){
    let licz1 = Number(document.getElementById("liczba12").value);
    let licz2 = Number(document.getElementById("liczba22").value);
    let licz3 = Number(document.getElementById("liczba32").value);
    
    document.getElementById("sredniawynik").innerHTML = "srednia: "+ (licz1+licz2+licz3)/3;
}

function wszystko(){
    let licz1 = Number(document.getElementById("liczba13").value);
    let licz2 = Number(document.getElementById("liczba23").value);

    document.getElementById("wszystkowynik").innerHTML = "wynik: "+ (licz1+licz2) ; 
    document.getElementById("wszystkowynik2").innerHTML = "wynik: "+ (licz1-licz2); 
    document.getElementById("wszystkowynik3").innerHTML = "wynik: "+ (licz1*licz2); 
}

function pierwiastek(){
    let licz1 = Number(document.getElementById("liczba14").value);

    document.getElementById("pierwwynik").innerHTML = "pierwiastek: "+ Math.sqrt(licz1) ;
}

function kwadrat(){
    let licz1 = Number(document.getElementById("liczba15").value);

    document.getElementById("kwadratwynik").innerHTML = "wynik: "+ (licz1*licz1);
}

function prosto(){
    let licz1 = Number(document.getElementById("liczba16").value);
    let licz2 = Number(document.getElementById("liczba26").value);
    let licz3 = Number(document.getElementById("liczba36").value);

    document.getElementById("prostowynik").innerHTML = "wynik: "+ (((licz1 * 2) * licz2) + ((licz2 * 2) * licz3) + ((licz1 * 2) * licz3));
}

function kolo(){
    let licz1 = Number(document.getElementById("liczba17").value);

    document.getElementById("kolowynik").innerHTML = "wynik: "+ Math.PI*(licz1*licz1);
    document.getElementById("kolowynik2").innerHTML = "wynik: "+ 2*Math.PI*licz1;
}

function koszt(){
    let licz1 = parseFloat(document.getElementById("liczba18").value);

    document.getElementById("kosztwynik").innerHTML = "Koszt"+ (28.8*licz1); 
}

function koszta(){
    let licz1 = parseFloat(document.getElementById("liczba19").value);
    let licz2 = parseFloat(document.getElementById("liczba29").value);
    let licz3 = parseFloat(document.getElementById("liczba39").value);
    let info1 = 100/licz3
    let info2=licz2/info1
    let wynik = info2*licz1

    document.getElementById("kosztawynik").innerHTML = "Koszt"+ wynik; 
}

function lokata(){
    let liczba120 = parseFloat(document.getElementById("liczba120").value);
    let rok=(((liczba120 * 1.08) - liczba120) * 0.81);
    let licz1 = parseFloat(document.getElementById("liczba220").value);
    

    document.getElementById("lokatawynik").innerHTML = "lokata"+ rok;
    document.getElementById("lokatawynik2").innerHTML = "lokata"+ rok*licz1;
}



