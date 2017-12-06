import { createStore, AnyAction, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

interface ExampleStore {
    Counter: number;
};

enum ActionTypes {
    Increase = "INCREASE",
    Decrease = "DECREASE"
}

interface IncreaseAction extends AnyAction {
    type: ActionTypes.Increase,
    payload: number
}

interface DecreaseAction extends AnyAction {
    type: ActionTypes.Decrease,
    payload: number
}

type AllExampleActions = IncreaseAction | DecreaseAction;

const defaultStore: ExampleStore = {
    Counter: 0
}


function countReducer(store: ExampleStore = defaultStore, action: AllExampleActions) : ExampleStore {
    switch(action.type) {
        case ActionTypes.Increase:
            return {...store, Counter: store.Counter + action.payload};
        case ActionTypes.Decrease:
            return {...store, Counter: store.Counter - action.payload};
        default:
            return store;
    }
}

var rootReducer = combineReducers<ExampleStore>({
    count: countReducer
});

const store = createStore<ExampleStore>(rootReducer, composeWithDevTools());

store.dispatch({ type: ActionTypes.Increase, payload: 1 });
store.dispatch({ type: ActionTypes.Decrease, payload: 5 });
store.dispatch({ type: ActionTypes.Decrease, payload: 0 });
store.dispatch({ type: ActionTypes.Increase, payload: 10 });
store.dispatch({ type: ActionTypes.Decrease, payload: 6 });