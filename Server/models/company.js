const mongoose = require('mongoose')
const { PACKAGE } = require('./enums')

var companySchema = new mongoose.Schema(
  {
    nom: String,
    siteWeb: {
      type: String,
      default: "www.test.com",
      required: true
    },
    pack: {
      type: String,
      enum: Object.values(PACKAGE)
  },
    license: {
        type: Number,
        min: 0
    },
    adminEmail: {
      type: String,
      required: true
  },
    adminId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    users: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
        }
    ]
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

module.exports = mongoose.model('Company', companySchema)
