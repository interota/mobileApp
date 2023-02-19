import { async } from '@angular/core/testing';
import { Profile } from './../models/profile';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireStoreDocumentService } from './fire-store-document.service';
import { GeoPoint } from 'firebase/firestore';
import { FirebaseLoginService } from '../services/firebaseLogin/firebase-login.service';
import { Geolocation, Position } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root',
})
export class ProfileService extends FireStoreDocumentService<Profile> {
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


  constructor(firestore: AngularFirestore,
    private fireService: FirebaseLoginService,
    ) {
    super(firestore, Profile);
  }
  async getUserDetails()
  {
    
    this.fireService.getCurrentUser().then(async (user) => {
      
      return await this.getProfileByUserId(user.uid);      
    });
  }

  async getProfileByUserId(userId: string): Promise<Profile> {
    let profile = null;
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => (profile = Profile.fromFireStore(d)))
      );
    return profile;
  }


  async updateCurrentPositionByUserId(userId)
  {
    const tmp = await Geolocation.getCurrentPosition();
    const point: GeoPoint = new GeoPoint(tmp.coords.latitude, tmp.coords.longitude);
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => d.ref.update({CurrentLocation : point }))
      );
  }

  async updatePositionByUserId(userId, position:Position)
  {
    const point: GeoPoint = new GeoPoint(position.coords.latitude, position.coords.longitude);
    await this.firestore
      .collection(Profile.getCollectionName(), (ref) =>
        ref.where('UserId', '==', userId)
      )
      .get()
      .forEach((res) =>
        res.docs.forEach((d) => d.ref.update({CurrentLocation : point }))
      );
  }

  // fillFromJson(json: any[]) {
  //   this.obj.forEach((profile) => {
  //     this.add(
  //       new Profile(
  //         '',
  //         profile.FullName,
  //         profile.Tel,
  //         '',
  //         profile.Country,
  //         profile.District,
  //         profile.Club,
  //         profile.Picture,
  //         null,
  //         profile.Role
  //       )
  //     );
  //   });
  // }
}
