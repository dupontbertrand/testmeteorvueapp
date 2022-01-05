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
    return Aides.find(findOptions).fetch();
  },
});
