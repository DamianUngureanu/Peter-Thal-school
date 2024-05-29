const anunturi=[
    {
        id:0,
        titlu:"Anunt mare",
        schelete:["paragraf","br","paragraf","paragraf","br","paragraf"],
        paragraf:["Şcoala începe, după cum ştiţi, luni-9 Ianuarie 2023.",
                "Condiţiile epidemiologice de la această dată, impun acordarea unei atenţii deosebite stării de sănătatea copiilor, atunci când îi aduceţi sau îi trimiteţi la şcoală.",
                "Vă transmitem, mai jos, recomandările primite de la Minister, cu rugămintea de a NU trimite copilul în colectivitatea şcolară, DACĂ acesta prezintă simptome de viroze respiratorii sau gripă.",
                "Mulţumim pentru buna colaborare şi ne dorim să avem împreună un an cu reuşite!",
            ],
        link:[],
        imagini:["imagini/unu.jpg","imagini/doi.jpg"],
    },
    {
        id:1,
        titlu:"Anunt mic",
        schelete:["link"],
        paragraf:[],
        link:[
            {
                hreff:"https://www.youtube.com/watch?v=Cff_O1HSXtg&ab_channel=SociopatRecords",
                titlu:"ORAR - An şcolar 2022-2023",
            },
        ],
        imagini:["imagini/sigla.jpg"],
    },
];
anunturi.forEach(anunt => {
    let pcont=0;
    let lcont=0;
    let cont=document.createElement("div");
    cont.className="cont"; cont.id="cont"+anunt.id;

        let DIVcont=document.createElement("div");
        DIVcont.className="DIVcont"; DIVcont.id="DIVcont";

            let scris=document.createElement("div");
            scris.className="scris"; scris.id="scris"+anunt.id;

            let tit=document.createElement("div");
            tit.className="tit"; tit.id="tit"+anunt.id;
            tit.innerHTML=anunt.titlu;
            scris.appendChild(tit);

            anunt.schelete.forEach(ceva => {
                if(ceva=="paragraf"){
                    pp=document.createElement("p");
                    pp.innerHTML="\xa0\xa0\xa0"+anunt.paragraf[pcont];
                    pp.style.color="black";
                    pcont++;
                    scris.appendChild(pp);
                }else{if(ceva=="link"){
                    let aaDIV=document.createElement("div");
                    aaDIV.className="aaDIV"; aaDIV.id="aaDIV"+anunt.id;
                        let aa=document.createElement("a");
                        aa.href=anunt.link[lcont].hreff;
                        aa.innerHTML="\xa0\xa0\xa0\xa0\xa0\xa0"+anunt.link[lcont].titlu;
                        aaDIV.appendChild(aa);
                    scris.appendChild(aaDIV);
                }else{
                    br=document.createElement("p");
                    br.innerHTML=" ";
                    br.style.height="27px";
                    scris.appendChild(br);
                }}
            });

            let plus=document.createElement("div");
            plus.className="plus"; plus.id="plus";
            scris.appendChild(plus);

            DIVcont.appendChild(scris);

            let imgg=document.createElement("div");
            imgg.className="imgg"; imgg.id="imgg"+anunt.id;
            anunt.imagini.forEach(imagine => {
                DIVimgg=document.createElement("img");
                DIVimgg.src=imagine; DIVimgg.id="DIVimgg"+anunt.id;
                imgg.appendChild(DIVimgg);
            });
            DIVcont.appendChild(imgg);
        cont.appendChild(DIVcont);
    document.getElementById("anunturi").appendChild(cont);
    
});

