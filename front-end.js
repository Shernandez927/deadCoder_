//!PSEUDO CODE FOR PROJECT 3
//!All content between //! comments can likely be put in their own files. 

//! OPENING PAGE

/*
* OPENING PAGE - ASKING IF YOU'RE DEAD YET OR NOT - SHOULD BE A SIMPLE DIV WITH TWO BUTTONS
* BUTTON 'YES' PROMPTS LOGIN
* BUTTON 'NO' PROMPTS SIGN UP

* AFTER EITHER ONE IS ACHIEVED, PRESENT RANDOM QUESTION 



*/

//! DAILY Q COMPONENT

/*
* SIMPLE DIV WITH 5 CARDS/BUTTONS THAT CAN BE CLICKED. 
* SUBMIT BUTTON UNDERNEATH

* AFTER SUBMITTING, THE NEXT PAGE SHOULD ONLY PULL FROM WHATEVER CATEGORY WAS SELECTED. 
*/

//! SIGN UP COMPONENT

/*
* DIV/FORM THAT CAN ACCEPT TEXT LABELED 'CHOOSE USERNAME'

* DIV/BUTTON THAT CAN GENERATE A RANDOM USERNAME THAT CAN BE SELECTED AS WELL
* SUBMIT BUTTON THAT SENDS INFORMATION TO THE BACKEND AND UPDATES THE DATABASE WITH THE NEW USER. THIS SHOULD HAVE AN AUTH CHECK TO MAKE SURE THERE AREN'T OVERLAPPING USERS
*/

//! CHOOSE AVATAR COMPONENT

/*
* LIST OF IMAGES THAT CAN BE SELECTED TO CORRESPOND WITH THE USER. 
* THIS CAN LIKELY JUST BE AN ARRAY OF IMAGES DISPLAYED ON THE SCREEN WITH A LOOP. MAKE EACH ITERATION CREATE A CARD AND PUSH IT INTO A BIGGER DIV THAT HAS CSS RULES TO HANDLE OVERFLOW PROPERLY. COULD ALSO HARD CODE EACH CARD FOR EACH IMAGE, IF WE DON'T HAVE AS MANY AS WERE ON THE WIREFRAME. 
*/

//! GAME SELECTION COMPONENT

/*
* USERNAME AND AVATAR TOP RIGHT. LOG OUT BUTTON SHOULD BE AROUND HERE AS WELL

* ONE DIV FOR ALL OPTIONS 
? OR
* ONE DIV PER OPTION. 
* UPVOTE/DOWNVOTE BUTTONS ON LEFT/RIGHT RESPECTIVELY. MUST BE LOGGED IN TO VOTE, HAVE AN AUTH CHECK. IF IT FAILS, A POP UP MODAL CAN BE USED TO SIGN UP
* HIGH SCORES BENEATH EACH GAME. CAN BE THEIR OWN CARDS OR TIED TO THE GAME CARD. LIST PULLS FROM THE DATABASE AND DISPLAYS ALL SCORES FROM HIGHEST TO LOWEST FOR THE TOP 6 OF EACH GAME. 
* WAS THINKING THERE COULD ALSO BE A SMALL SECTION SOMEWHERE THAT SHOWS THE LOGGED IN USER'S HIGHEST SCORE IN EACH GAME.
*/

//!TETRIS GAME

/*
* GIANT DIV IN THE CENTER WHERE GAME FUNCTIONALITY WILL BE RENDERED. 
* UPVOTE/DOWNVOTE BUTTON ON THE LEFT. 
* SCORE DISPLAYED AT THE BOTTOM RIGHT. PERSONALLY I THINK IT SHOULD BE DISPLAYED DIRECTLY UNDER THE TITLE 'TETRIS' BUT ULTIMATELY UNIMPORTANT CHANGE
* CONTROLS SHOULD BE SHOWN ON THE RIGHT SIDE. 
*/

//!TIC TAC TOE GAME

/*
* GIANT DIV IN THE CENTER WHERE GAME FUNCTIONALITY WILL BE RENDERED. 
* AVATARS INSTEAD OF X AND O FOR THE SPACES
* LAYOUT EXACTLY THE SAME AS THE GAME ABOVE. 
*/ 

//! PONG
/*
* GIANT DIV IN THE CENTER WHERE GAME FUNCTIONALITY WILL BE RENDERED. 
* SIMPLE CIRCLES AND RECTANGLES FOR GAME PIECES. 
* LAYOUT EXACLTY THE SAME AS THE GAME ABOVE. 
 */

//! NINJA STRIKER

/*
*GIANT DIV IN THE CENTER WHERE GAME FUNCTIONALITY WILL BE RENDERED. 
* DON'T KNOW ANYTHING ABOUT HOW THIS GAME WOULD BE MADE BUT THE LAYOUT WOULD BE THE SAME AS THE OTHER TWO ABOVE. 
*/


//!GAME OVER SCREEN
/*
* THERE SHOULD BE A GAME OVER SCREEN THAT EXPLAINS THE USER HAS LOST AND ASKS THEM TO SUBMIT THEIR HIGH SCORE. 
* CAN BE A SMALL POP UP DIV OR MODAL. 
* SUBMIT SHOULD SEND A POST OPERATION TO THE DATABASE 
* SHOULD BE AN OPTION TO SEND THE USER TO THE HOME PAGE AND TRY SAME GAME AGAIN. 
*/

//?MOST GAMES SHOULD HAVE AN OPTION TO PAUSE AND BAIL OUT IF AT ALL POSSIBLE TO CODE IN. 

//

//! USER PROFILE PAGE

/*
* SHOULD BE A VERY SIMPLE LANDING PAGE FOR THE USER.
* DISPLAYS AVATAR AND GIVES AN OPTION TO CHANGE SAID AVATAR. 
* DISPLAYS HIGH SCORES FOR ALL GAMES. 
* GIVES AN OPTION TO GO TO THE HOME SCREEN TO PLAY. 
* LOGOUT BUTTON PROPERLY DISPLAYED SOMEWHERE. LIKELY TOP RIGHT. 
* MAYBE SOME MISCELLANEOUS INFORMATION, LIKE MOST PLAYED GAME. 
*/
