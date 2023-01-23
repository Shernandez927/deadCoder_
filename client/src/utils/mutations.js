import { gql } from '@apollo/client';

export const LOGIN_PLAYER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      player {
        _id
        username
        codingLang
        avatar
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($username: String!, $password: String!) {
    addPlayer(username: $username, password: $password) {
      token
      player {
        _id
        username
<<<<<<< HEAD

=======
>>>>>>> 51d764da1d08c522168544edcd350c3e010194fe
      }
    }
  }
`;

export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($userId: ID!, $avatar: String!) {
    updateAvatar(userId: $userId, avatar: $avatar) {
      _id
      username
      avatar
    }
  }
`;

export const ADD_TICTACTOE_SCORE = gql`
  mutation Mutation($userId: ID!, $score: Int!) {
  addTicTacToeScore(userId: $userId, score: $score) {
    ticTacToeScoreValue
  }
}
`;

export const ADD_PONG_SCORE = gql`
  mutation AddPongScore($userId: ID!, $score: Int!) {
    addPongScore(userId: $userId, score: $score) {
      _id
      pongScoreValue
      createdAt
      userId {
        _id
        username
      }
    }
  }
`;

export const ADD_TETRIS_SCORE = gql`
  mutation AddTetrisScore($userId: ID!, $score: Int!) {
    addTetrisScore(userId: $userId, score: $score) {
      _id
      tetrisScoreValue
      createdAt
      userId {
        _id
        username
      }
    }
  }
`;

export const ADD_LIGHTS_OUT_SCORE = gql`
  mutation AddLightsOutScore($userId: ID!, $score: Int!) {
    addLightsOutScore(userId: $userId, score: $score) {
      _id
      lightsOutScoreValue
      createdAt
      userId {
        _id
        username
      }
    }
  }
`;
