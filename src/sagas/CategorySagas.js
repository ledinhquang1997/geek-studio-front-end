import { call, put} from 'redux-saga/effects'
import { CategoryServices } from '../services';
import {CategoryActions} from '../actions';

export function* fetchAllCategories() {
    try {
        const data = yield call(CategoryServices.getAllCategories);
        yield put(CategoryActions.getAllCategoriesSuccess(data));
    } catch (err){
        yield put(CategoryActions.getAllCategoriesFailed())
    }
}

export function* getcurrentCategoryWithTopics(action){
    try {
        const categoryId= yield action.payload;
        const data = yield call(CategoryServices.getcurrentCategoryWithTopics,categoryId);
        yield put(CategoryActions.getCurrentCategoryWithTopicsSuccess(data));
    } catch (err){
        yield put(CategoryActions.getCurrentCategoryAndTopicFailed(action.payload))
    }
}