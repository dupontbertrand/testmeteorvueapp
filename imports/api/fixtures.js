import { Meteor } from 'meteor/meteor';
import Aides from './collections/Aides.js';

Meteor.startup(() => {
  //For testing I need to clear and repopulate DB so each refresh remove all items and repopulate
  Aides.remove({});
  // if the Aides collection is empty
  if (Aides.find().count() === 0) {
    const aides = [
      {
        "name": "aide_1",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 30000,
        "statutNeeded": ["salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Oui",
        "kmToWorkNeeded": 50
      },{
        "name": "aide_2",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 15000,
        "statutNeeded": ["étudiant"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 35000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 200
      },{
        "name": "aide_3",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 50,
        "deptNeeded": [],
        "montant": 7000,
        "statutNeeded": ["retraité"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 15000,
        "publicTransportToWorkNeeded": "Oui",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_4",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 10000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 25000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 10
      },{
        "name": "aide_5",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 15000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_6",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 20000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Oui",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_7",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 75000,
        "statutNeeded": ["retraité"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_8",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 15000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Oui",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_9",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 3000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 200
      },{
        "name": "aide_10",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 9000,
        "statutNeeded": ["retraité"],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_11",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 17000,
        "statutNeeded": ["retraité"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_12",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 25,
        "deptNeeded": [],
        "montant": 9000,
        "statutNeeded": ["salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Oui",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_13",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 60,
        "deptNeeded": ["retraité"],
        "montant": 15000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_14",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 30,
        "deptNeeded": [],
        "montant": 15000,
        "statutNeeded": ["salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 40000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_15",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": ["salarié","indépendant","fonctionnaire"],
        "montant": 1000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_16",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 1500,
        "statutNeeded": ["salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_17",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 3000,
        "statutNeeded": ["étudiant","salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_18",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 40,
        "deptNeeded": [],
        "montant": 9500,
        "statutNeeded": ["salarié","indépendant","fonctionnaire"],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 25000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_19",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": [],
        "montant": 15000,
        "statutNeeded": ["étudiant"],
        "personnesAChargeNeeded": "Non",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },{
        "name": "aide_20",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ageNeeded": 18,
        "deptNeeded": ["étudiant"],
        "montant": 750,
        "statutNeeded": [],
        "personnesAChargeNeeded": "Oui",
        "revenuMax": 20000,
        "publicTransportToWorkNeeded": "Non",
        "kmToWorkNeeded": 100
      },
    ];

    aides.forEach(aide => Aides.insert(aide));
  }
});
