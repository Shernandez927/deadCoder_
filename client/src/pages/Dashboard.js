import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PLAYER, QUERY_ME } from "../utils/queries";
import { Grid, Button } from "@mui/material";
import Auth from "../utils/auth";

export default function Dashboard() {
  //random player until we have login/sign-up working
  const playerData = useQuery(QUERY_ME);
  const players = playerData.data?.players || [];
  const randplayerID = players[0]?._id || [];

  const playerid = randplayerID;
  const { data } = useQuery(QUERY_PLAYER, { variables: { id: playerid } });
  const username = data?.player.username || "";
  console.log(username);
  const rawTetrisScores = data?.player.tetrisScores || [];
  //const rawPongScores = data?.player.pongScores || []
  const rawTicTacToeScores = data?.player.ticTacToeScores || [];

  const tetrisScores =
    rawTetrisScores
      ?.map((x) => {
        return x.tetrisScoreValue;
      })
      .sort(function (a, b) {
        return b - a;
      }) || [];
  const ticTacToeScores =
    rawTicTacToeScores
      ?.map((x) => {
        return x.ticTacToeScoreValue;
      })
      .sort(function (a, b) {
        return b - a;
      }) || [];
  //const pongScores = rawPongScores.map((x)=>{ return x.pongScoreValue})

  if (Auth.loggedIn()) {
    return (
      <div className="pt-52">
        <h2 className="text-xl">
          {" "}
          Hello {username}, here are your HighScores:
        </h2>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={3}>
            <h3>Tetris</h3>
            <ol>
              {tetrisScores.map((score, index) => {
                return <li key={index}>{score}</li>;
              })}
            </ol>
          </Grid>
          <Grid item xs={3}>
            <h3>TicTacToe</h3>
            <ol>
              {ticTacToeScores.map((score, index) => {
                return <li key={index}>{score}</li>;
              })}
            </ol>
          </Grid>
        </Grid>
        <div className="w-1/3 flex justify-between">
          <Button
            variant="text"
            sx={{
              width: 200,
              fontFamily: "MenloRegular",
              fontSize: 17,
              color: "white",
              border: 0.5,
              borderColor: "#929292",
              borderRadius: 0,
              margin: 10,
            }}
            onClick={Auth.logout}
          >
            LOG OUT
          </Button>
          <Button
            variant="text"
            sx={{
              width: 200,
              fontFamily: "MenloRegular",
              fontSize: 17,
              color: "white",
              border: 0.5,
              borderColor: "#929292",
              borderRadius: 0,
              margin: 10,
            }}
            href="/games"
          >
            GO BACK
          </Button>
        </div>
      </div>
    );
  } else {
    return window.location.assign("/");
  }
}
