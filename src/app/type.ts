type hordozo = {
    kendo: boolean
    kendofelek? : string
    formazattak? : string
    ruhameret : number
    ido: number
    arkategoria: string
    szin?: string
}

type kendo = {
    hossz: number
    gyarto? : string
    osszetetel?: number
    gsm?: number
}

// altípus, nyelv, további: vagy üres vagy 1 vagy több, tehát tömb, ugye? 
//altípusnál ezt hogy?
//és a kompetenciák is tömbben, ugye?
//card- és képszélesség
export type perinatSegito = {
    nev : string,
    picture: string,
    tel: number,
    mail: string,
    link : string,
    bemutatkozo : string,
    online? : boolean,
    szulesfelkeszites? : boolean,
    hely? : helyadatok
    kompetenciak : SegitoSzakmak[],
    altipus?: Array <Dula | Szoptatas | MozgásIdoszak | MozgásTipus | Gyogykezelesek | Kor | Mentalis | KoraiFejleszto>,
    nyelv?: string[],
    tovabbiKomp? : string[],
}

//irányítószámból menti ki apival
export type helyadatok = {
    telepules : string,
    coord : [], //long, lat
    tavolsag : number,
} 

export type ht = {
    kolcsonzes : boolean
}

export enum SegitoSzakmak {
    DULA = "dúla",
    PERINAT = "perinatális szaktanácsadó",
    PSZICHO = "pszichológus",
    SZOPTATAS = "szoptatási tanácsadó vagy segítő",  
    HT = "hordozási tanácsadó",
    GYERKAGYAS = "gyerekágyas segítők",
    //TERAPEUTA = "terapeuta",
    //TRENER = "tréner", 
    KOR = "női kör vagy szertartás vezető, klub tartó",
    BABAMASSZAZS = "babamasszázs oktató",
    KONZULENS = "szülő-gyerek konzulens",
    FEJLESZTO = "korai fejlesztő terapeuta",
    MOZGAS = "tréner, jógaoktató, más mozgásforma oktatója",
    GYOGYKEZELES = "masszőr, gyógytornász, kinesiotape szakértő, egyéb terapeuta", //egy szó legyen?
    MENALIS = "egyéb perintaásis mentális segítő" 
}

export enum Dula {
    varandossag = "várandósságkísérő dúla", 
    szules = "szüléskísérő dúla", 
    gyerekagy = "gyerekágyas dúla"
}

export enum Szoptatas {
    IBCLC = "IBCLC", 
    LAKTACIOS = "laktációs szaktanácsadó",
    SEGITO = "önkéntes szoptatási segítő"
}

export enum KoraiFejleszto {
    konduktor = "Konduktor",
    PFAFFENROT = "Pfaffenrot terapeuta",
    DEVENY = "Dévényes terapeuta"
}

export enum MozgásTipus {
    ITI = "intimtorna tréner",
    KANGA = "kanga tréner",
    JOGA = "jóga oktató", 
    LYB = "loveYourBelly tréner",
    RTM = "RTM tréner",
    MAMIN = "maminbaba oktató",
    BWB = "bikeWithBaby tréner",
    FITMUMMY = "fitmummy tréner"
}

export enum MozgásIdoszak {
    KISMAMA = "kismama",
    REGENERALO = "szülés utáni regeneráló",
    HORDOZOS = "hordozós torna"
}

export enum Gyogykezelesek {
    GYOGYTORNASZ = "gyógytornász",
    MASSZOR = "masszőr", 
    KINESIOTAPE = "kinesiotape szakértő", 
    MAS = "egyéb terapeuta"
}

export enum Mentalis {
    COACH = "coach",
    MENTAL = "mentálhigiénés szakemer"
}

export enum Kor {
    HURCI = "hordozós klub vezető",
    MOSI = "mosható klub vezető",
    SZULESALDO = "szülésáldó szertartás vezető",
    MONA = "Mother Nature anyakör vezető",
    ANYAKOR = "anyakör vezető",
    NOIKOR = "női kör vezető"
}

export type city = {
    country : string,
    lat : number,
    local_names : Object,
    lon : number, 
    name : string
}

//helyadatok kulcs, kép máshogy kisebb

//coachok meg mentálhigienések?
/** 
https://json-generator.com/

mégújabb
[
  '{{repeat(12)}}',
  {
    nev : '{{firstName()}} {{surname()}}',
    picture: '{{integer(0, 70)}}.jpg',
    tel: '+36 {{phone()}}',
    mail: '{{email()}}',
    link : '{{lorem(2, "words")}}.com',
    bemutatkozo : '{{lorem(1, "paragraphs")}}',
    online : '{{bool()}}',
    szulesfelkeszites : '{{bool()}}',
    hely: {
      telepules : function (tags) {
        var telepulesek = ['Budapest, 11. kerület', 'Kecskemét', 'Szeged', 'Szentendre', 'Veszprém', 'Salgótartján', '', 'Budapest, 1. kerület', 'Budapest, 15. kerület', 'Budapest, 3. kerület'];
        return telepulesek[tags.integer(0, telepulesek.length - 1)];
      },
      coord: ['{{floating(16.05, 22.55)}}', '{{floating(44.45, 48.35)}}'],
      tavolsag : '{{integer(0, 100)}}'
    },
    kompetenciak : [
      '{{repeat(1, 4)}}',
      function (tags) {
      var szak = ['dúla', 'perinatális szaktanácsadó', 'pszichológus', 'szoptatási tanácsadó vagy segítő', 'hordozási tanácsadó', 'gyerekágyas segítő', 'női kör vagy szertartás vezető, klub tartó', 'babamasszázs oktató', 'szülő-gyerek konzulens', 'korai fejlesztő terapeuta', 'tréner, jógaoktató, más mozgásforma oktatója', 'masszőr, gyógytornász, kinesiotape szakértő, egyéb terapeuta', 'egyéb perintaásis mentális segítő'];
      return szak[tags.integer(0, szak.length - 1)];
    }],
    altipus: '',
    nyelv : [
      '{{repeat(0, 3)}}',
      function (tags) {
      var nyelvek = ['angol', 'német', 'francia', 'spanyol', 'szlovák', 'orosz'];
      return nyelvek[tags.integer(0, nyelvek.length - 1)];
    }],
    tovabbiKomp : [
      '{{repeat(0, 2)}}',
      function (tags) {
      var komp = ['fitoterapeuta', 'óvodapedagógus', 'fotós', 'ápoló', 'dietetikus', 'művészetterapeuta', 'munkajogász'];
      return komp[tags.integer(0, komp.length - 1)];
    }]
   }
]

uj
{
    nev : '{{firstName()}} {{surname()}}',
    picture: '{{integer(0, 70)}}.jpg',
    tel: '+36 {{phone()}}',
    mail: '{{email()}}',
    link : '{{lorem(2, "words")}}.com',
    bemutatkozo : '{{lorem(1, "paragraphs")}}',
    online : '{{bool()}}',
    szulesfelkeszites : '{{bool()}}',
    hely: {
      telepules : function (tags) {
        var telepulesek = ['Budapest, 11. kerület', 'Kecskemét', 'Szeged', 'Szentendre', 'Veszprém', 'Salgótartján', '', 'Budapest, 1. kerület', 'Budapest, 15. kerület', 'Budapest, 3. kerület'];
        return telepulesek[tags.integer(0, telepulesek.length - 1)];
      },
      coord: ['{{floating(16.05, 22.55)}}', '{{floating(44.45, 48.35)}}'],
      tavolsag : '{{integer(0, 100)}}'
    },
    kompetenciak : function (tags) {
      var szak = ['dúla', 'perinatális szaktanácsadó', 'pszichológus', 'szoptatási tanácsadó vagy segítő', 'hordozási tanácsadó', 'gyerekágyas segítők', 'női kör vagy szertartás vezető, klub tartó', 'babamasszázs oktató', 'szülő-gyerek konzulens', 'korai fejlesztő terapeuta', 'tréner, jógaoktató, más mozgásforma oktatója', 'masszőr, gyógytornász, kinesiotape szakértő, egyéb terapeuta', 'egyéb perintaásis mentális segítő'];
      return szak[tags.integer(0, szak.length - 1)];
    },
    altipus: '',
    nyelv : function (tags) {
      var nyelvek = ['angol', 'német', 'francia', 'spanyol', 'szlovák', '', ''];
      return nyelvek[tags.integer(0, nyelvek.length - 1)];
    },
    tovabbiKomp : function (tags) {
      var komp = ['fitoterapeuta', 'óvodapedagógus', 'fotós', 'ápoló', '', '', ''];
      return komp[tags.integer(0, komp.length - 1)];
    }
   }

{
     nev : '{{firstName()}} {{surname()}}',
    picture: '{{integer(0, 100)}}.jpg',
    tel: '+36 {{phone()}}',
    mail: '{{email()}}',
    link : '{{lorem(2, "words")}}.com',
    bemutatkozo : '{{lorem(1, "paragraphs")}}',
    online : '{{bool()}}',
    szulesfelkeszites : '{{bool()}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tavolsag : '{{integer(0, 100)}}',
    kompetenciak : function (tags) {
      var szak = ['dúla', 'perinatális szaktanácsadó', 'pszichológus', 'szoptatási tanácsadó vagy segítő', 'hordozási tanácsadó', 'gyerekágyas segítők', 'női kör vagy szertartás vezető, klub tartó', 'babamasszázs oktató', 'szülő-gyerek konzulens', 'korai fejlesztő terapeuta', 'tréner, jógaoktató, más mozgásforma oktatója', 'masszőr, gyógytornász, kinesiotape szakértő, egyéb terapeuta', 'egyéb perintaásis mentális segítő'];
      return szak[tags.integer(0, szak.length - 1)];
    },
    altipus: '',
    nyelv : function (tags) {
      var nyelvek = ['angol', 'német', 'francia', 'spanyol', 'szlovák', '', ''];
      return nyelvek[tags.integer(0, nyelvek.length - 1)];
    },
    tovabbiKomp : function (tags) {
      var komp = ['fitoterapeuta', 'óvodapedagógus', 'fotós', '', ''];
      return komp[tags.integer(0, komp.length - 1)];
    }
    },
    
    lat 44.45 - 48.35 
    lon 16.05 - 22.55

    jpg https://xsgames.co/randomusers/assets/avatars/female/
    */