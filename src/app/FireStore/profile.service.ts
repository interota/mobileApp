import { Profile } from './../models/profile';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireStoreDocumentService } from './fire-store-document.service';
import { GeoPoint } from 'firebase/firestore';
import { FirebaseLoginService } from '../services/firebaseLogin/firebase-login.service';
import { Geolocation, Position } from '@capacitor/geolocation';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends FireStoreDocumentService<Profile> {

  participant = [
    {
     "FullName": "Pieter Populaire",
     "District": 2140,
     "Club": "Noord-Limburg",
     "Country": "Belgium",
     "Email": "pieter_de_pp@hotmail.com",
     "Tel": "+32478907454",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Timo Beilmann",
     "District": 1860,
     "Club": "Bingen-Ingelheim am Rhein",
     "Country": "Germany",
     "Email": "timo.beilmann1991@gmail.com",
     "Tel": "+4917623654567",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Paulo Renato  Ferreira Dias",
     "District": 1960,
     "Club": "Povoa d eVarzim",
     "Country": "Portugal",
     "Email": "prenatodias@hotmail.com",
     "Tel": "+934746985",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Laura Verdegaal",
     "District": 1580,
     "Club": "Gooi &amp; Vechtstreek",
     "Country": "Netherlands",
     "Email": "lauraverdegaal@gmail.com",
     "Tel": "+31622190250",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Pedro Summavielle",
     "District": 1970,
     "Club": "Universidade do Porto",
     "Country": "Portugal",
     "Email": "pedrosummavielle96@hotmail.com",
     "Tel": "+351914663448",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "ana gomes",
     "District": 1960,
     "Club": "Sintra",
     "Country": "Portugal",
     "Email": "anagomes271090@gmail.com",
     "Tel": "+913948546",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Jan-Niklas Fechner",
     "District": 1900,
     "Club": "Hamm",
     "Country": "Germany",
     "Email": "Fechner-90@web.de",
     "Tel": "+17675315976",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Katharina Weing�rtner",
     "District": 1860,
     "Club": "Hybrid S�dwest",
     "Country": "Germany",
     "Email": "kath.wein.internationales@gmail.com",
     "Tel": "+4917672945073",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Leander Rump",
     "District": 1900,
     "Club": "Bochum",
     "Country": "Germany",
     "Email": "leander.rump@gmail.com",
     "Tel": "+49 171 5271498",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "GABY CARDONA",
     "District": 5890,
     "Club": "WEST HOUSTON\/KATY",
     "Country": "United States",
     "Email": "gaby.24@me.com",
     "Tel": "+2817456264",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Josef Rainer",
     "District": 6900,
     "Club": "Rotaract Club Of Atlanta",
     "Country": "United States",
     "Email": "jrainer@rainerjosef.com",
     "Tel": "+7704059543",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "J�r�me Coffin",
     "District": 1660,
     "Club": "Paris Quai d�Orsay",
     "Country": "France",
     "Email": "Jeromecoffin@rotaract-paris-quaidorsay.fr",
     "Tel": "+671929088",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Joao Fonseca",
     "District": 1960,
     "Club": "Sintra",
     "Country": "Portugal",
     "Email": "joao.fonseca@dm7.pt",
     "Tel": "+351934127249",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Benjamin Wilson",
     "District": 5240,
     "Club": "Conejo Valley",
     "Country": "United States",
     "Email": "brw6713@gmail.com",
     "Tel": "Benjamin W 101",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Entel� Seferaj",
     "District": 1900,
     "Club": "ROTARACT Hagen",
     "Country": "Germany",
     "Email": "Entele.seferaj@hotmail.com",
     "Tel": "+4917662094988",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Sabrina Fonseca",
     "District": 1960,
     "Club": "Sintra",
     "Country": "Portugal",
     "Email": "sabfernandez92@gmail.com",
     "Tel": "+351936140069",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Juan Pagoada",
     "District": 5890,
     "Club": "West Houston Kathy",
     "Country": "United States",
     "Email": "albertopagoada@gmail.com",
     "Tel": "+504 9849-2046",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Doris Grimm",
     "District": 2201,
     "Club": "Madrid International",
     "Country": "Spain",
     "Email": "doris_grimm@web.de",
     "Tel": "-",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Francisco Baeta Baeta",
     "District": 1960,
     "Club": "Sintra",
     "Country": "Portugal",
     "Email": "frank_baeta@hotmail.com",
     "Tel": "+351 969659572",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Dechamps Alice",
     "District": 2140,
     "Club": "Brussels coudenberg international",
     "Country": "Belgium",
     "Email": "Alicedechamps3@gmail.com",
     "Tel": "+32494987465",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Karlis Bankovics",
     "District": 2410,
     "Club": "Riga",
     "Country": "Lithuania",
     "Email": "Karlis.bankovics@gmail.com",
     "Tel": "37129327314+",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Minh Hanh NGUYEN",
     "District": 1660,
     "Club": "Paris Ouest",
     "Country": "Vietnam",
     "Email": "hanh.rotary@gmail.com",
     "Tel": "+33604531599",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Marlon MARQUES",
     "District": 1660,
     "Club": "Rotaract Paris Quai d'Orsay",
     "Country": "France",
     "Email": "marlonbr1@gmail.com",
     "Tel": "+33623568269",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Lionel Roth",
     "District": 2140,
     "Club": "Rotaract Brussels Coudenberg International",
     "Country": "Belgium",
     "Email": "lionel.ro@hotmail.com",
     "Tel": "+32473208129",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Caroline Lazaro",
     "District": 6900,
     "Club": "Rotaract Club of Atlanta",
     "Country": "United States",
     "Email": "lazarocf11@gmail.com",
     "Tel": "+1 (864) 415-6958",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Miriam CALLA",
     "District": 1790,
     "Club": "THIONVILLE MIRABELLE",
     "Country": "France",
     "Email": "miriacalla@gmail.com",
     "Tel": "+33629630345",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Vivianne Huber",
     "District": 2000,
     "Club": "Zurich",
     "Country": "Switzerland",
     "Email": "viviannehuber@hotmail.com",
     "Tel": "+41796786488",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Lukas Puidokas",
     "District": 1462,
     "Club": "Rotaract club of Kaunas Fortress",
     "Country": "Lithuania",
     "Email": "lukas@puidokas.lt",
     "Tel": "+37062099153",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Heilmar Becker",
     "District": 1660,
     "Club": "Paris Quai d�Orsay",
     "Country": "France",
     "Email": "rotary@heilmar.eu",
     "Tel": "+33 6 66 33 77 96",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Laura Phillips",
     "District": 1660,
     "Club": "Paris Quai d'Orsay",
     "Country": "France",
     "Email": "lauraainsliephillips@gmail.com",
     "Tel": "+767028299",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Valts Tenters",
     "District": 2410,
     "Club": "Riga Daugava",
     "Country": "Latvia",
     "Email": "Rotaractdaugava@gmail.com",
     "Tel": "+371 26 599 006",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Apulskis Arvidas",
     "District": 1462,
     "Club": "Klaipedos Senamiescio Rotaract",
     "Country": "Lithuania",
     "Email": "Arvidas.apulskis@gmail.com",
     "Tel": "+370 (685) 05 319",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Andrea Serrani",
     "District": 2090,
     "Club": "Macerata",
     "Country": "Italy",
     "Email": "andreaserrani92@gmail.com",
     "Tel": "+393332371757",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Katarzyna Tonkowicz",
     "District": 2231,
     "Club": "Warsaw Fryderyk Chopin",
     "Country": "Poland",
     "Email": "katarzyna.tonkowicz@rotaract.org.pl",
     "Tel": "+48665835900",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Maximilian Vosseler",
     "District": 1930,
     "Club": "Karlsruhe",
     "Country": "Germany",
     "Email": "maximilian.vosseler@rotaract.de",
     "Tel": "+491734208828",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Moreno Weilenmann",
     "District": 1580,
     "Club": "Rotaract Amsterdam",
     "Country": "The Netherlands",
     "Email": "Moreno.weilenmann@gmail.com",
     "Tel": "+31653454460",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Aron Pammer",
     "District": 1911,
     "Club": "Rotaract Club Budav�r",
     "Country": "Hungary",
     "Email": "aron.pammer@gmail.com",
     "Tel": "+36304483000",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Arianna Castro",
     "District": 1030,
     "Club": "Rotaract Club of Tyneside",
     "Country": "United Kingdom",
     "Email": "arianna@rotaracttyneside.org.uk",
     "Tel": "+44 7577857857",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Madara Devko",
     "District": 1470,
     "Club": "Rotaract K�benhavn Nord",
     "Country": "Denmark",
     "Email": "madara.devko@gmail.com",
     "Tel": "+4550272325",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Jose Carlos Ribera Morant",
     "District": 1160,
     "Club": "Rotaract Club Dublin",
     "Country": "Ireland",
     "Email": "josek.ribera@gmail.com",
     "Tel": "+353833617060",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Karla Araceli Cruz Guti�rrez",
     "District": 4185,
     "Club": "Puebla de los �ngeles",
     "Country": "Mexico",
     "Email": "Karla.cruzgz@gmail.com",
     "Tel": "+5212223508101",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Sumaya Adams-Attah",
     "District": 9102,
     "Club": "Adentan",
     "Country": "Ghana",
     "Email": "mayadams24@gmail.com",
     "Tel": "+233243835858",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Atoosa Arfa",
     "District": 6900,
     "Club": "Atlanta",
     "Country": "United States",
     "Email": "atoosa.arfa@gmail.com",
     "Tel": "�17138268466",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Patrick Seuwen",
     "District": 1130,
     "Club": "Westminster International",
     "Country": "United Kingdom",
     "Email": "patrick@seuwen.com",
     "Tel": "+447949185338",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Sathma Jayasinghe",
     "District": 3220,
     "Club": "RAC Achievers Lanka Business School \/ DRR 23.24 of RID 3220",
     "Country": "Sri Lanka",
     "Email": "sathma.rotaract3220@gmail.com",
     "Tel": "+94 773903337",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Imke H�userer",
     "District": 1580,
     "Club": "Amsterdam",
     "Country": "Netherlands",
     "Email": "imhauserer@outlook.com",
     "Tel": "+31 6 43152375",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Arnaud Wilmet",
     "District": 2140,
     "Club": "Antwerpen-Noord",
     "Country": "Belgium",
     "Email": "wilmet.arnaud@gmail.com",
     "Tel": "32470951182+",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Merlin Waldina Salazar",
     "District": 5890,
     "Club": "West Houston\/Katy",
     "Country": "United States",
     "Email": "ventas@constructorameraki.com",
     "Tel": "+50433365276",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Lu�s Alves",
     "District": 1960,
     "Club": "Sintra",
     "Country": "Portugal",
     "Email": "Luis.anastacioalves@gmail.com",
     "Tel": "+913259088",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Chieh Chang",
     "District": 3482,
     "Club": "TaipeiMetroEast",
     "Country": "Taiwan",
     "Email": "jaychang1115@gmail.com",
     "Tel": "+886956351115",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Nadia von Oesterreich",
     "District": 1820,
     "Club": "RAC Frankfurt\/Main-International",
     "Country": "Germany",
     "Email": "Nadia.vonoesterreich@gmail.com",
     "Tel": "+4917656965225",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Ting-ya Chen",
     "District": 3510,
     "Club": "Glean",
     "Country": "Taiwan",
     "Email": "giantyc.kh@gmail.com",
     "Tel": "+421949251436",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Andr� Ferreira",
     "District": 1970,
     "Club": "Universidade do Porto",
     "Country": "Portugal",
     "Email": "ferreirandre.8@gmail.com",
     "Tel": "+351930476384",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Patrick Hanrahan",
     "District": 5870,
     "Club": "Austin",
     "Country": "USA",
     "Email": "prhanra885@gmail.com",
     "Tel": "+14143351413",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Georgia Rafaela Vusdea",
     "District": 2241,
     "Club": "Rotaract Club Bucharest Triumph",
     "Country": "Romania",
     "Email": "georgia.vusdea@rotaract.ro",
     "Tel": "+0040743480720",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Yolanda de la Pe�a Pola",
     "District": 2202,
     "Club": "Madrid",
     "Country": "Spain",
     "Email": "yoli.alexis.pp@gmail.com",
     "Tel": "+34699690205",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Ataulhaq Yar",
     "District": 1870,
     "Club": "M�lheim an der Ruhr",
     "Country": "Germany",
     "Email": "atayar@gmx.de",
     "Tel": "+4915774370624",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Yannick M�ller",
     "District": 1860,
     "Club": "Bingen-Ingelheim am Rhein",
     "Country": "Germany",
     "Email": "Muelleryannick92@gmx.de",
     "Tel": "+4915204199089",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Carolin Christ",
     "District": 1930,
     "Club": "Ulm",
     "Country": "Germany",
     "Email": "Caro.ch96@gmx.de",
     "Tel": "+4915752834890",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Verena Meyners",
     "District": 1130,
     "Club": "Rotaract Club Westminster International",
     "Country": "United Kingdom",
     "Email": "verena.meyners@me.com",
     "Tel": "+447307077070",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Filipe Sousa",
     "District": 1960,
     "Club": "Lisboa",
     "Country": "Portugal",
     "Email": "filipeasdfg@gmail.com",
     "Tel": "3,52E+11",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Catarina Pinto",
     "District": 1970,
     "Club": "Ermesinde",
     "Country": "Portugal",
     "Email": "catarina.pinto.0106@gmail.com",
     "Tel": "+931360096",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Yasser Mouhajir",
     "District": 9010,
     "Club": "Rotaract Rabat Souissi",
     "Country": "Morocco",
     "Email": "yassermouhajir1@gmail.com",
     "Tel": "212678764525+",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "L�a Cramzou",
     "District": 1660,
     "Club": "Club de Paris Doyen",
     "Country": "France",
     "Email": "lea.cramazou@wanadoo.fr",
     "Tel": "+689919037",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Mario L�pez",
     "District": 2140,
     "Club": "Rotaract Brussels Coudenberg International",
     "Country": "Belgium",
     "Email": "mario.lopez.navarrete@gmail.com",
     "Tel": "+32474841357",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Tim-Benjamin Lembcke",
     "District": 1800,
     "Club": "Goettingen",
     "Country": "Germany",
     "Email": "mail@tibele.com",
     "Tel": "4,92E+12",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Theo Fleury",
     "District": 1660,
     "Club": "Paris Quai d'Orsay",
     "Country": "France",
     "Email": "theo175@gmail.com",
     "Tel": "+33603486333",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Maria In�s Almeida",
     "District": 1960,
     "Club": "Rotaract Club de Almada",
     "Country": "Portugal",
     "Email": "marialobato43@gmail.com",
     "Tel": "+351927292963",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Jo�o Mota",
     "District": 1970,
     "Club": "POMBAL",
     "Country": "Portugal",
     "Email": "joaocpm98@gmail.com",
     "Tel": "+351919679297",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Ryad Chergui",
     "District": 1660,
     "Club": "Paris Quai d�Orsay",
     "Country": "France",
     "Email": "ryad.farouk.chergui@gmail.com",
     "Tel": "+33767262578",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Madjda Nihel TEBBAL",
     "District": 1660,
     "Club": "Paris Quais D�orsey",
     "Country": "France",
     "Email": "tebbalnihel5@gmail.com",
     "Tel": "+769599834",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "F�bio Moreira",
     "District": 1970,
     "Club": "Rotaract Club Ermesinde",
     "Country": "Portugal",
     "Email": "fabioandrecmoreira@gmail.com",
     "Tel": "+916120828",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Maria Guedes",
     "District": 1970,
     "Club": "Mon��o",
     "Country": "Portugal",
     "Email": "mariamiguelguedes@hotmail.com",
     "Tel": "+913543729",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Sarah Dhaiby",
     "District": 2360,
     "Club": "Gothenburg Poseidon Rotaract Club",
     "Country": "Sweden",
     "Email": "sarahdhaiby1@gmail.com",
     "Tel": "+33650963319",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Adnan Mujanovic",
     "District": 1910,
     "Club": "Bern",
     "Country": "Switzerland",
     "Email": "amujanovic96@gmail.com",
     "Tel": "+38762907767",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Jo�o Pedro Artur Silva",
     "District": 1960,
     "Club": "Rotaract Club Almada",
     "Country": "Portugal",
     "Email": "jp.arturs@gmail.com",
     "Tel": "+966411151",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Virginia Goffredi",
     "District": 2050,
     "Club": "Brescia",
     "Country": "Italy",
     "Email": "virginiagoffredi@gmail.com",
     "Tel": "+393453061376",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Giulia Strada",
     "District": 2050,
     "Club": "Brescia",
     "Country": "Italy",
     "Email": "giuliastrada317@gmail.com",
     "Tel": "+39 334 210 7235",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Lucas Vogt",
     "District": 1880,
     "Club": "Dresden ",
     "Country": "Germany",
     "Email": "lucas_vogt@gmx.net",
     "Tel": "+004917663438834",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Luis  Aranda ",
     "District": 4170,
     "Club": "Valle de M�xico ",
     "Country": "Mexico",
     "Email": "luis4170@gmail.com",
     "Tel": "+525541307999",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Florin Leuca",
     "District": 2241,
     "Club": "Bucharest Atheneum ",
     "Country": "Romania",
     "Email": "florinleuca9@gmail.com",
     "Tel": "+0040787897626",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Himantha Alahakoon",
     "District": 3220,
     "Club": "Alumni of University of Moratuwa",
     "Country": "Sri Lanka",
     "Email": "himantha.rotaract@gmail.com",
     "Tel": "+94718552526",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Lea Drathen",
     "District": 1820,
     "Club": "Rac Kassel",
     "Country": "Germany",
     "Email": "leadrathen@gmail.com",
     "Tel": "+015758809923",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Marco  Staderini ",
     "District": 2071,
     "Club": "Fiesole ",
     "Country": "Italy",
     "Email": "mastad@hotmail.it",
     "Tel": "+3935622987",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Ekaterina Iurkova",
     "District": 1820,
     "Club": "Rotaract Club Kassel",
     "Country": "Germany",
     "Email": "ekaterina.rotaract@gmail.com",
     "Tel": "+491755200281",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Gesa Poppinga",
     "District": 1850,
     "Club": "Ostfriesland",
     "Country": "Germany",
     "Email": "gesa.poppinga@web.de",
     "Tel": "+491781813903",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Viktoria Carzavec",
     "District": 1842,
     "Club": "Rotaract Club Munich",
     "Country": "Germany",
     "Email": "vc.rotaract@gmail.com",
     "Tel": "+004915150744318",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Michael Neidel",
     "District": 1950,
     "Club": "Ansbach",
     "Country": "Germany",
     "Email": "michaelneidel@aol.com",
     "Tel": "+491712825022",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Cristina Gregori",
     "District": 2090,
     "Club": "Foligno",
     "Country": "Italy",
     "Email": "cristina.gregori2407@gmail.com",
     "Tel": "+3466008889",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Lucrezia  Piermarini ",
     "District": 2090,
     "Club": "Foligno ",
     "Country": "Italy",
     "Email": "lucrip2210@gmail.com",
     "Tel": "+3924511673",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Theresa  Ahrens ",
     "District": 1900,
     "Club": "Essen",
     "Country": "Germany",
     "Email": "Tmja00@t-online.de",
     "Tel": "+00491757495459",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Emilia Fj�der",
     "District": 1600,
     "Club": "Rotaract Club Scheveningen",
     "Country": "Netherlands",
     "Email": "emilia.fjader@gmail.com",
     "Tel": "+31683141688",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "J-M Bokhorst",
     "District": 1560,
     "Club": "Apeldoorn",
     "Country": "Netherlands",
     "Email": "bokhorstjm@gmail.com",
     "Tel": "+0031642426932",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Tim Wehberg",
     "District": 1900,
     "Club": "Luedenscheid-Mark",
     "Country": "Germany",
     "Email": "tc.wehberg@gmx.de",
     "Tel": "+004915774277802",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Chris Mitchell",
     "District": 1130,
     "Club": "Rotaract Club Westminster",
     "Country": "United Kingdom",
     "Email": "chrismitchell19@gmail.com",
     "Tel": "+447531892283",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Isabella Minderop",
     "District": 1860,
     "Club": "Mannheim",
     "Country": "Germany",
     "Email": "iminderop@gmx.de",
     "Tel": "+00491746761499",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Pierpaolo Marra",
     "District": 1600,
     "Club": "Scheveningen ",
     "Country": "Netherlands",
     "Email": "pierpo89@rotaractscheveningen.nl",
     "Tel": "+31612797276",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Felix Daub",
     "District": 1890,
     "Club": "Hamburg-Alstertal",
     "Country": "Germany",
     "Email": "felix-daub@hotmail.de",
     "Tel": "+00491775737178",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Arturo Casanova",
     "District": 1880,
     "Club": "Rotaract Club Erlangen",
     "Country": "Germany",
     "Email": "arturcasanova01@gmail.com",
     "Tel": "+491724623409",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Livia Landskron",
     "District": 1910,
     "Club": "Rotaract Wien-Graben",
     "Country": "Austria",
     "Email": "livia.landskron@hotmail.com",
     "Tel": "+436509939706",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Gimenez Elise",
     "District": 1700,
     "Club": "Montpellier",
     "Country": "France",
     "Email": "gimenez.elise@orange.fr",
     "Tel": "+0033642693650",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Julia Konkov",
     "District": 2071,
     "Club": "Firenze",
     "Country": "Italy",
     "Email": "juliakonkov.official@gmail.com",
     "Tel": "?+39&nbsp;338&nbsp;483&nbsp;2210?",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Alexander Johannes Krassnigg",
     "District": 1910,
     "Club": "RAC Wien-Graben",
     "Country": "Austria",
     "Email": "alexander.krassnigg@gmx.at",
     "Tel": "+004369910847010",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Agnieszka Sikora",
     "District": 2231,
     "Club": "Warszawa Sr�dmiescie",
     "Country": "Poland",
     "Email": "agnieszka.sikora.aru@gmail.com",
     "Tel": "+668157717",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "HUSAIN A ALSHABIB",
     "District": 1130,
     "Club": "Westminster International",
     "Country": "United Kingdom",
     "Email": "hussain87@gmail.com",
     "Tel": "+07428230013",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Sergei Rogalin",
     "District": 2230,
     "Club": "Rotaract Donetsk",
     "Country": "Ukraine",
     "Email": "sergiyrogalin@gmail.com",
     "Tel": "+00491729047178",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Chan Wei Chang",
     "District": 3482,
     "Club": "Taipei Morality First",
     "Country": "Taiwan",
     "Email": "eric.880823@gmail.com",
     "Tel": "+886975085405",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Cheng Yi Chiang",
     "District": 3482,
     "Club": "Taipei Morality First",
     "Country": "Taiwan",
     "Email": "johnnes@gmail.com",
     "Tel": "+886926356988",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Bart De Winter",
     "District": 2140,
     "Club": "Rotaract Antwerpen Noord",
     "Country": "Belgium",
     "Email": "bart.de.winter2@gmail.com",
     "Tel": "0032477764221+",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Astrid DURAND-VIEL",
     "District": 1690,
     "Club": "Bordeaux",
     "Country": "France",
     "Email": "astrid.durandviel@gmail.com",
     "Tel": "+0610429130",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Alexandre  Heucq ",
     "District": 1660,
     "Club": "Paris Quai d'Orsay ",
     "Country": "France",
     "Email": "Alexandre.heucq@gmail.com",
     "Tel": "+33633028580",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "James Thomas",
     "District": 1180,
     "Club": "Great Britain &amp; Ireland",
     "Country": "United Kingdom",
     "Email": "skierkats@gmail.com",
     "Tel": "+07736526050",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Maurits Schmidt",
     "District": 1570,
     "Club": "Utrecht",
     "Country": "Netherlands",
     "Email": "mauritsschmidt@gmail.com",
     "Tel": "+0031624802932",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Didier Portran",
     "District": 1700,
     "Club": "Rotaract club de Montpellier",
     "Country": "France",
     "Email": "Didierportran@gmail.com",
     "Tel": "+33660377048",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Marlin Leemhuis",
     "District": 1570,
     "Club": "Rotaract Utrecht",
     "Country": "Netherlands",
     "Email": "marlinleemhuis@gmail.com",
     "Tel": "+31652058591",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Marleen (officially Magdalena) Dijkhoff",
     "District": 1570,
     "Club": "Utrecht",
     "Country": "Netherlands",
     "Email": "mmedijkhoff@gmail.com",
     "Tel": "+0031650275153",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Laurentius  Van Der Ven",
     "District": 1570,
     "Club": "Utrecht",
     "Country": "Netherlands",
     "Email": "lorenzvanderven@hotmail.com",
     "Tel": "+0621810666",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Paul Stapersma",
     "District": 1570,
     "Club": "Rotaract Utrecht",
     "Country": "Netherlands",
     "Email": "paul.stapersma@gmail.com",
     "Tel": "+0624521298",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "J�rgen Alphonsus",
     "District": 1910,
     "Club": "Wien-Stadtpark",
     "Country": "Austria",
     "Email": "juergen.alphonsus@gmail.com",
     "Tel": "+436645207698",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Weronika Wasik",
     "District": 2231,
     "Club": "Srodmiescie",
     "Country": "Poland",
     "Email": "weronikawasik@gmail.com",
     "Tel": "+0048515825127",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Romain Plusse",
     "District": 1770,
     "Club": "Meaux ",
     "Country": "France",
     "Email": "plusse.romain@gmail.com",
     "Tel": "+0666547029",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Edvard Rostohar",
     "District": 1912,
     "Club": "Rotaract club Ljubljana",
     "Country": "Slovenia",
     "Email": "edvard.rostohar@gmail.com",
     "Tel": "+0038640704503",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Pia M�ller",
     "District": 1890,
     "Club": "Hamburg",
     "Country": "Germany",
     "Email": "pia.mueller.05@gmail.com",
     "Tel": "+4915730188022",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Ruta Kairyte",
     "District": 1462,
     "Club": "Vilnius Rotaract Club",
     "Country": "Lithuania",
     "Email": "rutakairyte1@gmail.com",
     "Tel": "+37063926629",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Kai Hung Yim",
     "District": 1160,
     "Club": "Rotaract Club Dublin Central",
     "Country": "Ireland",
     "Email": "yimkaihungjay@gmail.com",
     "Tel": "+0871891379",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Matthias De Lepeleer",
     "District": 2130,
     "Club": "Ghent",
     "Country": "Belgium",
     "Email": "matthiasdelepeleer@gmail.com",
     "Tel": "+0032489432520",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Emilien SIMEON",
     "District": 1660,
     "Club": "Paris Quai d'Orsay",
     "Country": "France",
     "Email": "emilien.simeon@yahoo.fr",
     "Tel": "+33761439161",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "St�phanie LEROUX",
     "District": 1690,
     "Club": "Bordeaux",
     "Country": "France",
     "Email": "Stephanie.lerouxpro@gmail.com",
     "Tel": "+0782224516",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Tommaso  Giorgetti ",
     "District": 2071,
     "Club": "Firenze Ovest ",
     "Country": "Italy",
     "Email": "giorgetti@rotaractfiovest.org",
     "Tel": "+3664944099",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Georgette Mbong Ondoua",
     "District": 1690,
     "Club": "Bordeaux",
     "Country": "Switzerland",
     "Email": "mbongondoua@hotmail.fr",
     "Tel": "+41765047903",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Philipp Dimitriadis",
     "District": 1910,
     "Club": "RC Wien Connect",
     "Country": "Austria",
     "Email": "philipp.dimitriadis@gmx.at",
     "Tel": "+436649483966",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "CONSTANCE JAIYEOLA",
     "District": 9110,
     "Club": "Rotaract Club of Ikoyi",
     "Country": "Nigeria",
     "Email": "celebrityconstance27@gmail.com",
     "Tel": "+08097801158",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Semeli Christophorides",
     "District": 2452,
     "Club": "Rotaract club of nicosia",
     "Country": "Cyprus",
     "Email": "schristophorides@gmail.com",
     "Tel": "+0035799129064",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Ioanna  Gregoriades",
     "District": 2452,
     "Club": "Rotaract Club of Nicosia",
     "Country": "Cyprus",
     "Email": "ioannagregoriades@gmail.com",
     "Tel": "+35799617616",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Justyna Binkiewicz",
     "Club": "Rotaract Club London westminister",
     "Country": "UK",
     "Email": "justynabinkiewicz28@gmail.com",
     "Tel": "+447565870833",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Joshua  Arigbe ",
     "District": 9141,
     "Club": "Effurun CB ",
     "Country": "Nigeria",
     "Email": "arigbej@gmail.com",
     "Tel": "+08061278894",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Mike Scott",
     "District": 1130,
     "Club": "Westminster",
     "Country": "United Kingdom",
     "Email": "Michaelscott894@gmail.com",
     "Tel": "+447946734514",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Tanguy, Pierre Mont",
     "District": 1690,
     "Club": "Angoul�me Le Valois",
     "Country": "France",
     "Email": "tanguymontrotaract@gmail.com",
     "Tel": "+33634952470",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Ilya Shcharbitski",
     "District": 160,
     "Club": "Rotaract Scheveningen",
     "Country": "Netherlands",
     "Email": "ilya@rotaractscheveningen.nl",
     "Tel": "+0031629070761",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Gizem Aykut",
     "District": 2440,
     "Club": "Bostanli",
     "Country": "Turkey",
     "Email": "rtcgizemaykut@gmail.com",
     "Tel": "+905330518054",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "Mohamed  Farouk Mohamed Fahmy radwan",
     "District": "??",
     "Club": "??",
     "Country": "Egypt",
     "Email": "faroukfun123@gmail.com",
     "Tel": "??",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "MAROCAIN 1 ",
     "Country": "Morocco",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    },
    {
     "FullName": "MAROCAIN 2 ",
     "Country": "Morocco",
     "Picture": "null",
     "CurrentLocation": "null",
     "Role": "Participant",
     "RespensibleId": "null"
    }
   ];


  obj = [
    {
      "FullName": "Adan Bouzekri",
      "Tel": "+216 26 667 665",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ISG",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }

  },
  {

      "FullName": "Ahmed Besbes",
      "Tel": "+216 20 531 266",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ESSECT",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }

  },
  {

      "FullName": "Ahmed Boukhtioua",
      "Tel": "+216 55 869 069",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ESPRIT",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }

  },
  {
      "FullName": "Ala Abdesslam",
      "Tel": "+216 52 669 468",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "MAHDIA",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Amine Khediri",
      "Tel": "+216 24 118 443",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": {
      },
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Aziz Dabbech",
      "Tel": "+216 54 568 094",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Cosmopolitain",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Bochra Mellouli",
      "Tel": "+216 20 799 793",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "IHEC",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Chamsse Mansour",
      "Tel": "+216 20 096 117",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Ariana la rose",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Fatma Baccar",
      "Tel": "+216 94 768 277",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ESSECT",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Hiba Zayani",
      "Tel": "+216 27 919 905",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Tunis Business School",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Houssem Ben Salah",
      "Tel": "+216 26 667 675",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Ezzahra Saint Germain",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Khalil Naccache",
      "Tel": "+216 52 128 123",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ESSECT",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Labib Mezghanni",
      "Tel": "+216 22 870 601",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Les berges du lac",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Mahdi Abbassi",
      "Tel": "+216 23 463 075",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ESSECT",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Mahdi Kallel",
      "Tel": "+216 58 424 320",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Golfe",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Maryem Sehli",
      "Tel": "+216 95 595 746",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Rades",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Maya Kamoun",
      "Tel": "+216 28 893 399",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Tunis Doyen",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Mohamed Aziz Ben Ammar",
      "Tel": "+216 20 611 366",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Rades",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Mohamed Kanzari",
      "Tel": "+216",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Marsa Carthage",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Nadia Trabelsi",
      "Tel": "+216 94 294 791",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Carnoy",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Nawres Hamdi",
      "Tel": "+216 24 605 336",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ISCAE Manouba",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Omar Dekhili",
      "Tel": "+216 58 816 066",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ESSECT",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Oussema Ghabry",
      "Tel": "+216 29 502 553",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Rades",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Outail Ouni",
      "Tel": "+216 51 258 745",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Megrine",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Rana Righi",
      "Tel": "+216 96 386 790",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Sidi bou said el beji",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Rania Achour",
      "Tel": "+216 20 498 699",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ISG",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Salma Tlatli",
      "Tel": "+216 98 309 667",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Cosmopolitain",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Sana Aouam",
      "Tel": "+216",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "ISG",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Tarek Hamlaoui",
      "Tel": "+216 90 207 934",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Ennaser",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Yasmin Ben Moussa",
      "Tel": "+216 52 119 943",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Sidi bou said el beji",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  },
  {
      "FullName": "Yasmine Turki",
      "Tel": "+216 22 011 144",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Phoenix Sud",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Yassine Korbi",
      "Tel": "+216 52 297 798",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Sousse",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
      }
  },
  {
      "FullName": "Wissem Messaoudi",
      "Tel": "+216 52 251 267",
      "Picture": {
      },
      "Country": "Tunisia",
      "District": "9010",
      "Club": "Les berges du lac",
      "CurrentLocation": {
      },
      "Role": "Team",
      "RespensibleId": {
    }
  }
];




  userName : string;
  constructor(firestore: AngularFirestore,
    private fireService: FirebaseLoginService,
    ) {
    super(firestore, Profile);
  }
  async getUserDetails(): Promise<Profile> {
    let user = await this.fireService.getCurrentUser();
    let profile = await this.getProfileByUserId(user.uid);

    this.userName = profile.fullName;
    return profile;
  }

  async getProfileByUserId(userId: string): Promise<Profile> {
    let profile = null;
    if (userId == null || userId == '') {
      await this.firestore
        .collection(Profile.getCollectionName(), (ref) =>
          ref.where('UserId', '==', userId)
        )
        .get()
        .forEach((res) =>
          res.docs.forEach((d) => (profile = Profile.fromFireStore(d)))
        );
    }
    return profile;
  }

  async updateCurrentPositionByUserId(userId) {
    const tmp = await Geolocation.getCurrentPosition();
    const point: GeoPoint = new GeoPoint(
      tmp.coords.latitude,
      tmp.coords.longitude
    );
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => d.ref.update({ CurrentLocation: point }))
      );
  }

  async updatePositionByUserId(userId, position: Position) {
    const point: GeoPoint = new GeoPoint(
      position.coords.latitude,
      position.coords.longitude
    );
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => d.ref.update({ CurrentLocation: point }))
      );
  }

  async updateTokenByUserId(userId, token: string) {
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => d.ref.update({ DeviceToken: token }))
      );
  }
  fillFromJson(json: any[]) {
    this.obj.forEach((profile) => {
      this.fireService.angularFireAuthentication
        .createUserWithEmailAndPassword(profile.Email, '123456789')
        .then((user) => {
          this.add(
            new Profile(
              '',
              profile.FullName,
              profile.Tel,
              profile.Email,
              profile.Country,
              profile.District,
              profile.Club,
              '',
              null,
              profile.Role,
              null,
              user.user.uid,
              null
            )
          );
        });
    });
  }
}
