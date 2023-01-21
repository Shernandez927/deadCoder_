const { Schema, model, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

const playerSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true },
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  avatar: {
    type: String,
    required: true,
  },
  codingLang: {
    type: String,
  },
  pongScores: [
    {
      type: Schema.Types.ObjectId,
      ref: 'PongScore'
    }
  ],
  ticTacToeScores: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TicTacToeScore'
    }
  ]
});

playerSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

playerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Player = model("Player", playerSchema);

module.exports = Player;
