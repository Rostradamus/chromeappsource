import { GamePlateActions } from './types';

// const MOVE_RATE = 2;

const currBlockActions = dispatch => ({
  createNewBlock: block => {
    dispatch({ type: GamePlateActions.CREATE_BLOCK, payload: block });
  },
  clearGame: () => {
    dispatch({ type: GamePlateActions.CLEAR_GAME, payload: {} });
  }
});

export default currBlockActions;