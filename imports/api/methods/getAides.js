import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Aides from '../collections/Aides.js';
import { formatDistance, subDays } from 'date-fns';
import differenceInYears from 'date-fns/differenceInYears'

Meteor.methods({
  'getAides'(form) {
    check(form, Object);
    var age = differenceInYears(new Date(Date.now()), new Date(form.birthdate));
    var revenuInteger = parseInt(form.revenu);
    var findOptions = {};
    findOptions = {
      ageNeeded: { $lte: age },
      statutNeeded: form.status,
      revenuMax: { $gte: revenuInteger }
    };
    if (form.transportToWork == "Non") {
      findOptions.publicTransportToWorkNeeded = { $ne: "Oui"}
    }
    if (form.personnesACharge == "Non") {
      findOptions.personnesAChargeNeeded = { $ne: "Oui"}
    }
    console.log(findOptions);
    return Aides.find(findOptions).fetch();
  },
});

// "name": "test1",
// "ageNeeded": 20,
// "deptNeeded": [],
// "montant": 30000,
// "statutNeeded": ["salarié","indépendant","fonctionnaire"],
// "personnesAChargeNeeded": "Oui",
// "revenuMax": 20000,
// "transportToWork": "Oui",
// "kmToWork": 50
