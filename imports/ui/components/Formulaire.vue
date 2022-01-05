<template>
  <div class="container py-5">
    <div class="row mt-2">
      <div class="col-4 text-center">
        <h4 class="title-progress" v-bind:class="{ 'active' : step > 0}">1. Informations personnelles</h4>
      </div>
      <div class="col-4 text-center">
        <h4 class="title-progress" v-bind:class="{ 'active' : step > 1}">2. Informations professionnelles</h4>
      </div>
      <div class="col-4 text-center">
        <h4 class="title-progress" v-bind:class="{ 'active' : step > 2}">3. Récapitulatif</h4>
      </div>
      <!-- {{form}}
      {{step}} -->
    </div>
    <div class="row" id="step_1" v-if="step == 1">
      <div class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p><img src="img/equality.png" alt="">Quel est votre sexe ?</p>
        </div>
        <div class="col-12 text-center">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioGenderMale" value="male" v-model="form.gender">
            <label class="form-check-label button" for="radioGenderMale"><img src="img/male.png">Homme</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioGenderFemale" value="female" v-model="form.gender">
            <label class="form-check-label button" for="radioGenderFemale"><img src="img/female.png">Femme</label>
          </div>
        </div>
      </div>
      <div class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p><img src="img/schedule.png" alt="">Quelle est votre date de naissance ?</p>
        </div>
        <div class="col-12 text-center">
            <input type="date" id="start" name="trip-start" value="2022-01-01" min="1900-01-01" max="2022-12-31" v-model="form.birthdate">
        </div>
      </div>
      <div class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p><img src="img/city.png" alt="">Quelle est votre ville ?</p>
        </div>
        <div class="col-4 offset-4">
          <input type="text" list="locations_list" class="form-control" id="city_input" name="city-input" @input="cityChange($event)" v-model="form.city">
          <datalist id="locations_list">
            <option v-for="location in locations" :value="location">{{location}}</option>
          </datalist>
        </div>
      </div>
      <div class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p><img src="img/family.png" alt="">Avez-vous des personnes à charge ?</p>
        </div>
        <div class="col-12 text-center">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioChargeYes" value="Oui" v-model="form.personnesACharge">
            <label class="form-check-label button" for="radioChargeYes"><img src="img/yes.png">Oui</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioChargeNo" value="Non" v-model="form.personnesACharge">
            <label class="form-check-label button" for="radioChargeNo"><img src="img/no.png">Non</label>
          </div>
        </div>
      </div>
      <div class="form_custom shadow-sm mt-4" v-if="form.personnesACharge == 'Oui'">
        <div class="col-12 text-center">
          <p><img src="img/family.png" alt="">De combien de personnes êtes-vous à charge ?</p>
        </div>
        <div class="col-12 text-center">
          <input type="number" v-model="form.nbreACharge">
        </div>
      </div>
      <div class="col-3 offset-10 mt-2">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="step += 1" :disabled="isButtonOneDisabled(form)">Etape suivante</button>
      </div>
    </div>
    <div class="row" id="step_2" v-if="step == 2">
      <div class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p><img src="img/" alt="">Quel est votre statut ?</p>
        </div>
        <div class="col-12 d-flex justify-content-around">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioStatusEtudiant" value="étudiant" v-model="form.status">
            <label class="form-check-label button" for="radioStatusEtudiant"><img src="img/boy.png">Étudiant</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioStatusDemandeur" value="demandeur" v-model="form.status">
            <label class="form-check-label button" for="radioStatusDemandeur"><img src="img/job-search.png">Demandeur d'emploi</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioStatusSalarié" value="salarié" v-model="form.status">
            <label class="form-check-label button" for="radioStatusSalarié"><img src="img/salary.png">Salarié (Secteur privé)</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioStatusFonctionnaire" value="fonctionnaire" v-model="form.status">
            <label class="form-check-label button" for="radioStatusFonctionnaire"><img src="img/team.png">Fonctionnaire</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioStatusIndépendant" value="indépendant" v-model="form.status">
            <label class="form-check-label button" for="radioStatusIndépendant"><img src="img/idea.png">Indépendant</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioStatusRetraité" value="retraité" v-model="form.status">
            <label class="form-check-label button" for="radioStatusRetraité"><img src="img/retirement.png">Retraité</label>
          </div>
        </div>
      </div>
      <div v-if="conditionRevenus(form.status)" class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p>
            <img src="img/salary2.png" alt="">
            <span v-if="form.status == 'retraité'">Quel est le montant de votre retraite par an ?</span>
            <span v-else-if="form.status == 'demandeur'">Quel est le montant des aides que vous pervecez actuellement ?</span>
            <span v-else>Quel est votre revenu brut/an ?</span>
          </p>
        </div>
        <div class="col-4 offset-4">
          <input type="number" class="form-control" id="" name="" v-model="form.revenu">
        </div>
      </div>
      <div v-if="conditionKm(form.status)" class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p>
            <img src="img/road.png" alt="">
            <span v-if="form.status == 'salarié' || form.status == 'indépendant' || form.status == 'fonctionnaire'">Combien avez-vous de kilométres pour vous rendre sur votre lieu de travail ?</span>
            <span v-else>Combien avez-vous de kilométres pour vous rendre dans votre établissement ?</span>
          </p>
        </div>
        <div class="col-4 offset-4">
          <input type="number" class="form-control" id="km_input" name="km-input" v-model="form.kmToWork">
        </div>
      </div>
      <div v-if="conditionKm(form.status)" class="form_custom shadow-sm mt-4">
        <div class="col-12 text-center">
          <p>
            <img src="img/public-transport.png" alt="">
            <span v-if="form.status == 'salarié' || form.status == 'indépendant' || form.status == 'fonctionnaire'">Allez-vous sur votre lieu de travail en transport en commun ?</span>
            <span v-else>Allez-vous dans votre établissement en transport en commun ?</span>
          </p>
        </div>
        <div class="col-12 text-center">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioChargeYes" value="Oui" v-model="form.transportToWork">
            <label class="form-check-label button" for="radioChargeYes"><img src="img/yes.png">Oui</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radioChargeNo" value="Non" v-model="form.transportToWork">
            <label class="form-check-label button" for="radioChargeNo"><img src="img/no.png">Non</label>
          </div>
        </div>
      </div>
      <div class="col-2 mt-2">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="step -= 1" >Etape précédente</button>
      </div>
      <div class="col-2 offset-8 mt-2">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="step += 1" :disabled="isButtonTwoDisabled(form)">Etape suivante</button>
      </div>
    </div>
    <div class="row" id="step_3" v-if="step == 3">
      <div class="col-12 my-5 form_custom text-center py-5">
        <p>Je suis un(e) <span><img :src="'img/' + form.gender + '.png'" alt="" style="height: 25px;width:auto;"></span> né(e) le <b>{{form.birthdate}}</b> et qui habite à <b>{{form.city}}</b>, je suis un(e) <b>{{form.status}}</b> <span v-if="conditionRevenus(form.status)">et je perçoit <b>{{form.revenu}}€</b> par an</span>.</p>
        <p v-if="form.personnesACharge == 'Oui'">J'ai à charge <b>{{form.nbreACharge}}</b> personnes.</p>
        <p v-if="conditionKm(form.status)">J'ai <b>{{form.kmToWork}}km</b> pour me rendre à mon établissement<span v-if="form.transportToWork == 'Oui'">, que je fait en transport en commun</span>.</p>
        <button type="button" class="button btn-primary btn-lg" @click="getAides($event)" >Voir les aides auxquelles je suis éligible</button>
      </div>
      <div class="col-2 mt-2">
        <button type="button" class="btn btn-primary" v-on:click="step -= 1">Etape précédente</button>
      </div>
      <div v-for="aide in aidesPossibles" class="col-4 mt-3">
        <div class="card mx-auto" style="width: 18rem;">
          <div class="card-body p-3">
            <h5 class="card-title text-center">{{aide.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Montant maximum alloué : {{aide.montant}}€</h6>
            <p class="card-text">{{aide.desc}}</p>
            <p>Age minimum requis : {{aide.ageNeeded}}</p>
            <p>Obligation de prendre les transports en commun pour être éligible: {{aide.publicTransportToWorkNeeded}}</p>
            <p>Obligation d'avoir des personnes à charge pour être éligible: {{aide.personnesAChargeNeeded}}</p>
            <a href="#" class="card-link">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aides from '../../api/collections/Aides'
import axios from 'axios';

export default {
  data() {
    return {
      step: 1,
      locations: [],
      aidesPossibles: [],
      form: {
        gender: '',
        birthdate: '',
        city: '',
        personnesACharge: '',
        nbreACharge: '',
        status: '',
        revenu: '',
        transportToWork: '',
        kmToWork: ''
        // gender: 'male',
        // birthdate: '1992-12-09',
        // city: 'Aumelas',
        // personnesACharge: 'Non',
        // nbreACharge: '2',
        // status: 'salarié',
        // revenu: '20000',
        // transportToWork: 'Oui',
        // kmToWork: '70'
      }
    }
  },
  mounted(){
    this.form.birthdate = '1990-01-01'
  },
  meteor: {
    $subscribe: {
      'aides': [],
    },
    aides () {
      return Aides.find({})
    },
  },
  methods: {
    conditionRevenus(status) {
      if (status != "étudiant" && status != "") return true
    },
    conditionKm(status) {
      if (status == "salarié" || status == "indépendant" || status == "étudiant" || status == "fonctionnaire") return true
    },
    isButtonOneDisabled(form) {
      if (this.form.gender == '' || this.form.birthdate == '' || this.form.city == '' || this.form.personnesACharge == '') return true;
    },
    isButtonTwoDisabled(form) {
      if (this.form.status == '')  {
        return true;
      } else if (this.form.status == 'salarié' && this.form.revenu == '' && this.form.transportToWork == '' && this.form.kmToWork == '') {
        return true;
      } else if (this.form.status == 'fonctionnaire' && this.form.revenu == '' && this.form.transportToWork == '' && this.form.kmToWork == '') {
        return true;
      } else if (this.form.status == 'indépendant' && this.form.revenu == '' && this.form.transportToWork == '' && this.form.kmToWork == '') {
        return true;
      } else if (this.form.status == 'demandeur' && this.form.revenu == '') {
        return true;
      } else if (this.form.status == 'retraité' && this.form.revenu == '') {
        return true;
      } else if (this.form.status == 'étudiant' && this.form.transportToWork == '' && this.form.kmToWork == '') {
        return true;
      }
    },
    cityChange(event) {
      event.preventDefault()
      var city = this.form.city;
      axios.get('https://api-adresse.data.gouv.fr/search/?q=' + city + '&limit=15', {
      }).then(resp => {
        var i = resp.data.features;
        this.locations = i.map(f => {
          console.log(f);
          if (f.properties.type == "municipality") return f.properties.city;
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getAides(event) {
      event.preventDefault()
      Meteor.call('getAides', this.form, (error, results) => {
        this.loader = true;
        if (error) {
          alert(error.error)
        } else {
          this.loader = false;
          this.aidesPossibles = results;
        }
      })
    }
  },
}
</script>

<style scoped>

  .progress {
    border-radius: 10px;
  }

  .title-progress {
    color: #8ec5fa;
  }

  .title-progress.active {
    color: #339bff;
  }

  .form_custom {
    background: #ffffff;
    border: solid 1px #95c7fa;
    border-radius: 10px;
    padding: 30px 0 30px 0;
  }

  p img, label img {
    width: 35px;
    margin-right: 5px;
  }

  p {
    color: #666666;
  }
  #step_1 .button {
    border: solid 1px gray;
    border-radius: 10px;
    padding: 30px;
    background: #eef3f7;
  }
  #step_2 .button {
    border: solid 1px gray;
    border-radius: 10px;
    padding: 10px;
    background: #eef3f7;
  }
  #step_3 .button {
    border: solid 1px gray;
    border-radius: 10px;
    padding: 10px;
    color: #0064ed;
    background: #eef3f7;
  }

  #step_1 .button:hover,
  #step_1 input[type="radio"]:checked+label,
  #step_2 .button:hover,
  #step_2 input[type="radio"]:checked+label {
    border: solid 1px #0064ed;
    border-radius: 10px;
    background: #ebfcff;
    cursor: pointer;
  }

  input[type="radio"]{
    display: none;
  }

  input[type="date"]{
    border: solid 1px gray;
    border-radius: 10px;
    padding: 10px;
    background: #eef3f7;
  }
</style>
