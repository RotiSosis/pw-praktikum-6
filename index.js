document.getElementById("DaButton").onclick = function(){
    var Nama = document.getElementById("idnama").value;
    var Kategori = document.getElementById("idcat").value;
    var Pemakaian = document.getElementById("idpemakaian").value;

    if (Pemakaian > 30){
        Pemakaian = 0;
        alert("Pemakaian Maksimal 30 hari");

        
    }
    else if(Nama == "" || Pemakaian == ""){
        Pemakaian = 0;
        alert("Harap Diisi Semua");
    }
    
    document.getElementById("shnama").innerHTML = Nama;
    document.getElementById("shcat").innerHTML = Kategori;
    document.getElementById("shpemakaian").innerHTML = Pemakaian;

    var tarif = 0;
    var abodemen = 0 ;
    var subtotal = 0;
    var pajak = 0;

    if (Kategori == "Sosial"){
        tarif = 300;
        abodemen = 10000;
        pajak = 0;
    }
    else if (Kategori == "Rumah"){
        tarif = 500;
        abodemen = 30000;
        pajak = 10;
    }
    else if (Kategori == "Apartemen"){
        tarif = 750;
        abodemen = 50000;
        pajak = 15;
    }
    else if (Kategori == "Industri"){
        tarif = 1000;
        abodemen = 750000;
        pajak = 20;
    }
    else {
        tarif = 1250;
        abodemen = 100000;
        pajak = 25;
    }

    var nomor = "";

    nomor += "<tr>";
    nomor += "<td> Nomor </td>";
    nomor += "<td> Tarif Per KWH </td>";
    nomor += "<td> Abodemen </td>";
    nomor += "<td> SubTotal </td>";
    nomor += "</tr>"; 

    for (var i = 1; i<=Pemakaian ; i++){
        subtotal = tarif + abodemen;
        
        nomor += "<tr>";
        nomor += "<td>" + i + "</td>";
        nomor += "<td>" + tarif + "</td>"; //hitung tarif per kwh
        nomor += "<td>" + abodemen + "</td>"; 
        nomor += "<td>" + subtotal + "</td>"; 
        nomor += "</tr>"
        
        
        tarif = tarif + tarif;
    }
    var totalpajak = (subtotal * pajak)/100;
    
    document.getElementById("nombre").innerHTML = nomor;
    document.getElementById("idsubtotal").innerHTML = subtotal;
    document.getElementById("idpajak").innerHTML = totalpajak;
    document.getElementById("idbayar").innerHTML = (subtotal + totalpajak);

    
}

