const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CaseSchema = new Schema({
  title: { type: String, required: false },
  dateCreated: { type: Date, default: Date.now },
  physicianId: { type: String, required: true, ref: '' },
  dexcom: {}, // get data from dexcom.js?
  description: { type: String },
  comment: [{
    type:mongoose.Schema.Types.ObjectId, ref:'Comment'
  }],
  age: { type: Number, required: true },
  sex: {type: String, required: true },
  pastHx: {
    diabetes: {type: Boolean, required: false},
    highBP: {type: Boolean, required: false},
    highChol: {type: Boolean, required: false},
    hypoThyr: {type: Boolean, required: false},
    goiter: {type: Boolean, required: false},
    cancer: {type: Boolean, required: false},
    leukemia: {type: Boolean, required: false},
    psoriasis: {type: Boolean, required: false},
    heartProbs: {type: Boolean, required: false},
    heartMurmur: {type: Boolean, required: false},
    pneumonia: {type: Boolean, required: false},
    pulmEmb: {type: Boolean, required: false},
    asthma: {type: Boolean, required: false},
    stroke: {type: Boolean, required: false},
    epilepsy: {type: Boolean, required: false},
    cataracts: {type: Boolean, required: false},
    kidneyDis: {type: Boolean, required: false},
    kidneyStone: {type: Boolean, required: false},
    crohns: {type: Boolean, required: false},
    colitis: {type: Boolean, required: false},
    anemia: {type: Boolean, required: false},
    jaundice: {type: Boolean, required: false},
    hepatitis: {type: Boolean, required: false},
    ulcer: {type: Boolean, required: false},
    rhemFev: {type: Boolean, required: false},
    tuberc: {type: Boolean, required: false},
    hivAids: {type: Boolean, required: false}
  },
  recentHx: {
    general: {
      weightGain: {type: Boolean, required: false},
      weightLoss: {type: Boolean, required: false},
      fatigue: {type: Boolean, required: false},
      weakness: {type: Boolean, required: false},
      fever: {type: Boolean, required: false},
      nightSweats: {type: Boolean, required: false}
    },
    muscleJointBone: {
      numbness: {type: Boolean, required: false},
      jointPain: {type: Boolean, required: false},
      muscleWeakenss: {type: Boolean, required: false},
      jointSwelling: {type: Boolean, required: false}
    },
    ears: {
      ringing: {type: Boolean, required: false},
      hearingLoss: {type: Boolean, required: false}
    },
    eyes: {
      pain: {type: Boolean, required: false},
      redness: {type: Boolean, required: false},
      visionLoss: {type: Boolean, required: false},
      doubleBlur: {type: Boolean, required: false},
      dryness: {type: Boolean, required: false}
    },
    throat: {
      sore: {type: Boolean, required: false},
      hoarseness: {type: Boolean, required: false},
      swallowDifficult: {type: Boolean, required: false},
      jawPain: {type: Boolean, required: false}
    },
    heartLungs: {
      chestPain: {type: Boolean, required: false},
      palpitations: {type: Boolean, required: false},
      shortBreath: {type: Boolean, required: false},
      faiting: {type: Boolean, required: false},
      swollenLegsFeet: {type: Boolean, required: false},
      cough: {type: Boolean, required: false}
    },
    nervous: {
      headaches: {type: Boolean, required: false},
      dizziness: {type: Boolean, required: false},
      lossOfConc: {type: Boolean, required: false},
      tingling: {type: Boolean, required: false},
      memoryLoss: {type: Boolean, required: false}
    },
    stomachIntest: {
      nausea: {type: Boolean, required: false},
      heartburn: {type: Boolean, required: false},
      stomPain: {type: Boolean, required: false},
      vomiting: {type: Boolean, required: false},
      yellowJaundice: {type: Boolean, required: false},
      consitpation: {type: Boolean, required: false},
      diarrhea: {type: Boolean, required: false},
      bloodStool: {type: Boolean, required: false},
      blackStool: {type: Boolean, required: false}
    },
    skin: {
      redSkin: {type: Boolean, required: false},
      rash: {type: Boolean, required: false},
      nodulesBumps: {type: Boolean, required: false},
      hairloss: {type: Boolean, required: false},
      colorChange: {type: Boolean, required: false}
    },
    blood: {
      anemia: {type: Boolean, required: false},
      clots: {type: Boolean, required: false}
    },
    kidneyUrineBlad: {
      painfulUrine: {type: Boolean, required: false},
      bloodUrine: {type: Boolean, required: false}
    },
    psych: {
      depression: {type: Boolean, required: false},
      excessiveWorry: {type: Boolean, required: false},
      difficultyFallSleep: {type: Boolean, required: false},
      difficultyStaySleep: {type: Boolean, required: false},
      difficultySexArousal: {type: Boolean, required: false},
      poorAppetite: {type: Boolean, required: false},
      foodCrave: {type: Boolean, required: false},
      freqCry: {type: Boolean, required: false},
      sensitivity: {type: Boolean, required: false},
      suicideThoughtAttempt: {type: Boolean, required: false},
      stress: {type: Boolean, required: false},
      irritability: {type: Boolean, required: false},
      poorConc: {type: Boolean, required: false},
      racingThought: {type: Boolean, required: false},
      hallucinations: {type: Boolean, required: false},
      rapidSpeech: {type: Boolean, required: false},
      paranoia: {type: Boolean, required: false},
      moodSwings: {type: Boolean, required: false},
      anxiety: {type: Boolean, required: false},
      riskBehav: {type: Boolean, required: false}
    },
    female: {
      abPapSmear: {type: Boolean, required: false},
      irregPeriods: {type: Boolean, required: false},
      bleedBetweenPeriods: {type: Boolean, required: false},
      pms: {type: Boolean, required: false}
    },
  },
  drugs: {
    currentRx: {type: String, required: false},
    allergyRx: {type: String, required: false}
  }
});

const dCase = mongoose.model("dCase", CaseSchema);

module.exports = dCase;
