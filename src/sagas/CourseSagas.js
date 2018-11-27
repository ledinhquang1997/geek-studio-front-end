import { call, put } from 'redux-saga/effects'
import { CourseServices } from '../services';
import { CourseActions } from '../actions';

export function* fetchBestSellerCourses() {
    try {
        const data = yield call(CourseServices.getBestSellerCourses);
        yield put(CourseActions.getBestSellerSuccess(data));
    } catch (err) {
        yield put(CourseActions.getBestSellerFailed())
    }
}
export function* fetchTopRatingCourse() {
    try {
        const data = yield call(CourseServices.getTopRatingCourses);
        yield put(CourseActions.getTopRatingSucess(data));
    } catch (err) {
        yield put(CourseActions.getTopRatingFailed())
    }
}

export function* fetchTop6CoursesByCategoryId(action) {
    try {
        const id = yield action.payload;
        const data = yield call(CourseServices.getTop6CoursesByCategoryId, id);
        yield put(CourseActions.getTop6CoursesByCategorySuccess(data));
    } catch (err) {
        yield put(CourseActions.getTop6CoursesByCategoryFailed())
    }
}

export function* getCoursesByCategoryFilterPage(action) {
    try {
        const category = yield action.payload.category;
        const filter = yield action.payload.filter;
        const page = yield action.payload.page;

        const data = yield call(CourseServices.getCoursesByCategoryFilterPage, category, filter, page);

        yield put(CourseActions.getCurrentCoursesByCategorySuccess(data));
    } catch (err) {
        yield put(CourseActions.getCurrentCoursesByCategoryFailed("Error"))
    }
}

export function* getCourseDetail(action) {
    try {

        const courseId = yield action.payload.courseId;

        const data = yield call(CourseServices.getCourseDetail, courseId);

        yield put(CourseActions.getCourseDetailSuccess(data));
    } catch (err) {
        yield put(CourseActions.getCourseDetailFail("Can not get course detail"))
    }
}

export function* getCoursesByInstructor(action) {
    try {
        const username = yield action.payload.username;
        const page = yield action.payload.page;

        const data = yield call(CourseServices.getCoursesByInstructor, username, page);

        yield put(CourseActions.getCoursesByInstructorSuccess(data));
    } catch (err) {
        yield put(CourseActions.getCoursesByInstructorFail())
    }
}

export function* getCoursesOfStudent(action) {
    try {
        const username = yield action.payload.username;

        const data = yield call(CourseServices.getCoursesOfStudent, username);

        yield put(CourseActions.getCoursesOfStudentSuccess(data));
    } catch (err) {
        yield put(CourseActions.getCoursesOfStudentFail())
    }
}

export function* getUserCourseLessons(action) {
    try {
        const courseId = yield action.payload.courseId;

        const data = yield call(CourseServices.getUserCourseLessons, courseId);
        yield put(CourseActions.getUserCourseLessonsSuccess(data));
    } catch (err) {
        yield put(CourseActions.getUserCourseLessonsFail())
    }
}

export function* getStudentCourseSectionListByLesson(action) {
    try {
        const lessonId = yield action.payload.lessonId;

        const data = yield call(CourseServices.getUserCourseSectionListByLesson, lessonId);

        yield put(CourseActions.getStudentCourseSectionListByLessonSuccess(data, lessonId));

    } catch (err) {
        yield put(CourseActions.getStudentCourseSectionListByLessonFail())
    }
}

export function* getSectionDetail(action) {
    try {
        const sectionId = yield action.payload.sectionId;

        const data = yield call(CourseServices.getSectionDetail, sectionId);
        yield put(CourseActions.getSectionDetailSuccess(data));
    } catch (err) {
        yield put(CourseActions.getSectionDetailFail())
    }
}

export function* changeProgress(action) {
    const sectionId = yield action.payload.sectionId;
    const lessonId = yield action.payload.lessonId;
    yield call(CourseServices.changeCourseProgress, { sectionId: sectionId, lessonId: lessonId });
}


export function* getStudentCourseSectionListByLessonSuccess(action) {
    const data = yield action.payload.data;
    const lessonId = yield action.payload.urlLesson;
    if (data.currentLesson === lessonId) {
        const sectionDetail = yield call(CourseServices.getSectionDetail, data.currentSection);
        yield put(CourseActions.getSectionDetailSuccess(sectionDetail))
    }
    else {
        const sectionDetail = yield call(CourseServices.getSectionDetail, data.sections[0].id);

        yield put(CourseActions.getSectionDetailSuccess(sectionDetail))
        yield put(CourseActions.changeCurrentSection(data.sections[0].id))
    }
}

export function* getCourseListManagement(action) {
    try {
        const data = yield call(CourseServices.getCourseListManagement);
        yield put(CourseActions.getCourseListManagementSuccess(data));
    } catch (err) {
        yield put(CourseActions.getCourseListManagementFail())
    }

}

export function* getLessonListManagement(action) {
    try {
        const data = yield call(CourseServices.getLessonListManagement, action.payload.courseId);
        yield put(CourseActions.getLessonListManagementSuccess(data));
    } catch (err) {
        yield put(CourseActions.getLessonListManagementFail())
    }

}
export function* getLessonManagement(action) {
    try {
        const data = yield call(CourseServices.getLessonManagement, action.payload.lessonId);
        yield put(CourseActions.getLessonManagementSuccess(data));
    } catch (err) {
        yield put(CourseActions.getLessonManagementFail(err))
    }

}

export function* getSectionListManagement(action) {
    try {
        const data = yield call(CourseServices.getSectionListManagement, action.payload.lessonId);
        yield put(CourseActions.getSectionListManagementSuccess(data));
    } catch (err) {
        yield put(CourseActions.getSectionListManagementFail(err))
    }

}
