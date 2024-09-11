import mongoose from "mongoose";

const yourWillModelSchema = mongoose.Schema(
  {
    aboutYou: {
      aboutYouNames: {
        legalName: {
          type: String,
          required: true,
        },
        whatWeCall: {
          type: String,
        },
        dob: {
          day: {
            type: Number,
            min: 1,
            max: 31,
          },
          month: {
            type: Number,
            min: 1,
            max: 12,
          },
          year: {
            type: Number,
            max: 2007,
          },
        },
      },
      aboutYouBasics: {
        addressLineOne: {
          type: String,
          required: true,
        },
        addressLineTwo: {
          type: String,
          default: "",
        },
        city: {
          type: String,
          required: true,
        },
        postCode: {
          type: Number,
          required: true,
        },
        phoneNumber: {
          type: Number,
        },
        addressSearch: {
          type: String,
        },
      },
      aboutYouPartner: {
        maritalStatus: {
          type: String,
          required: true,
        },
        selectedPartner: {
          name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
        },
        addPartner: {
          fullname: {
            type: String,
          },
          email: {
            type: String,
          },
          partnerAddress: {
            type: String,
          },
          partnerDOB: {
            day: {
              type: Number,
              min: 1,
              max: 31,
            },
            month: {
              type: Number,
              min: 1,
              max: 12,
            },
            year: {
              type: Number,
              max: 2007,
            },
          },
          age: {
            type: String,
          },
        },
      },
      aboutYouChildren: {
        haveChildrens: {
          type: String,
          required: true,
        },
        addChild: {
          childName: {
            type: String,
          },
          childDOB: {
            day: {
              type: Number,
              min: 1,
              max: 31,
            },
            month: {
              type: Number,
              min: 1,
              max: 12,
            },
            year: {
              type: Number,
              max: 2007,
            },
          },
        },
      },
      aboutYouPets: {
        havePets: {
          type: String,
          required: true,
        },
        addPets: {
          petName: {
            type: String,
          },
        },
      },
    },
    guardians: {
      selectChildsGuardian: {
        name: {
          type: String,
        },
        email: {
          type: String,
        },
      },
      addGuardian: {
        fullname: {
          type: String,
        },
        email: {
          type: String,
        },
        guardianAddress: {
          type: String,
        },
        guardianDOB: {
          day: {
            type: Number,
            min: 1,
            max: 31,
          },
          month: {
            type: Number,
            min: 1,
            max: 12,
          },
          year: {
            type: Number,
            max: 2007,
          },
        },
        age: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

export const YourWill = mongoose.model("YourWillModel", yourWillModelSchema);
