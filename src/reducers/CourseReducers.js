import { CourseConstant, VariableConstants } from '../constants';

const highlightCoursesInitialState = { filter: "", courses: [] }
export const highlightCourses = (state = highlightCoursesInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_BEST_SELLER_COURSE:
            return state
        case CourseConstant.GET_BEST_SELLER_COURSE_SUCCESS:
            return { ...state, filter: VariableConstants.BEST_SELLER, courses: action.payload }
        case CourseConstant.GET_BEST_SELLER_COURSE_FAILED:
            return state
        case CourseConstant.GET_TOP_RATING_COURSE:
            return state
        case CourseConstant.GET_TOP_RATING_COURSE_SUCCESS:
            return { ...state, filter: VariableConstants.RATING, courses: action.payload }
        case CourseConstant.GET_TOP_RATING_COURSE_FAILED:
            return state
        default:
            return state
    }
}

const top6CoursesByCategoryInitialState = []
export const top6CoursesByCategory = (state = top6CoursesByCategoryInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY:
            return state
        case CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_SUCCESS:
            return action.payload
        case CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_FAILED:
            return state
        default:
            return state
    }
}

const currentCoursesByCategoryInitialState = { filter: VariableConstants.POPULAR, courses: [], msg: "", currentPage: 1 }
export const currentCoursesByCategory = (state = currentCoursesByCategoryInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY:
            return { ...state, filter: action.payload.filter, currentPage: action.payload.page }
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_SUCCESS:
            return { ...state, courses: action.payload }
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_FAILED:
            return { ...state, courses: [], msg: action.payload }
        default:
            return state
    }
}

const courseDetailInitialState = { err: "", data: {} }
export const courseDetail = (state = courseDetailInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_COURSE_DETAIL:
            return state;
        case CourseConstant.GET_COURSE_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                err: ""
            }
        case CourseConstant.GET_COURSE_DETAIL_SUCCESS_FAIL:
            return {
                ...state,
                data: {},
                err: action.payload.error
            }
        default:
            return state
    }
}

const currentCoursesByInstructorInitialState = { courses: [], err: false, currentPage: 1 }
export const currentCoursesByInstructor = (state = currentCoursesByInstructorInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_COURSES_BY_INSTRUCTOR:
            return { ...state, currentPage: action.payload.page }
        case CourseConstant.GET_COURSES_BY_INSTRUCTOR_SUCCESS:
            return { ...state, courses: action.payload.data, err: false }
        case CourseConstant.GET_COURSES_BY_INSTRUCTOR_FAIL:
            return { ...state, courses: [], err: true }
        default:
            return { ...state, courses: [], err: false }
    }
}

const CoursesOfStudentInitialState = { data: [], err: false, isLoading: false }
export const CoursesOfStudent = (state = CoursesOfStudentInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_COURSES_OF_STUDENT:
            return { ...state, isLoading: true }
        case CourseConstant.GET_COURSES_OF_STUDENT_SUCCESS:
            return { ...state, data: action.payload.data, isLoading: false }
        case CourseConstant.GET_COURSES_OF_STUDENT_FAIL:
            return { ...state, data: [], err: true }
        default:
            return state
    }
}

const UserCourseLessonsInitialState = {
    data: {
        "id": "",
        "name": "",
        "description": "",
        "cost": 0,
        "rating": 0,
        "amountStudent": 0,
        "image": "https://res.cloudinary.com/quanglibrary/image/upload/s--QReFaFjw--/v1540525483/geek/nodejs1_miaox0.jpg",
        "category": {
            "id": "",
            "name": "",
            "description": "",
            "image": ""
        },
        instructors: [],
        totalLesson: 3,
        totalSection: 9,
        lessonProgress: 0,
        sectionProgress: 0,
        learnerRating: null,
        lessons: []
    },
    err: false,
    isLoading: false

}

export const UserCourseLessons = (state = UserCourseLessonsInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_USER_COURSE_LESSONS:
            return { ...state, isLoading: true }
        case CourseConstant.GET_USER_COURSE_LESSONS_SUCCESS:
            return { ...state, data: action.payload.data, err: false, isLoading: false }
        case CourseConstant.GET_USER_COURSE_LESSONS_FAIL:
            return { ...state, data: {}, err: true }
        case CourseConstant.CHANGE_CURRENT_LESSON:
            return { ...state, data: { ...state.data, currentLesson: action.payload.lessonId } }
        default:
            return state
    }
}

const StudentCourseSectionListInitialState = {
    data: {
        id: "",
        ordinalNumber: 0,
        name: "",
        description: "",
        courseId: "",
        courseName: "",
        sectionProgress: 0,
        sections: []
    },
    err: false,
    isLoading: false
}
export const studentCourseSectionList = (state = StudentCourseSectionListInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_STUDENT_COURSE_SECTION_LIST:
            return { ...state, isLoading: true }
        case CourseConstant.GET_STUDENT_COURSE_SECTION_LIST_SUCCESS:
            return { ...state, data: action.payload.data, err: false, isLoading: false }
        case CourseConstant.GET_STUDENT_COURSE_SECTION_LIST_FAIL:
            return { ...state, data: {}, err: true }
        case CourseConstant.CHANGE_CURRENT_SECTION:
            return { ...state, data: { ...state.data, currentSection: action.payload.sectionId } }
        default:
            return state
    }
}

const SectionDetailInitialState = {
    data: {
        id: "",
        ordinalNumber: 0,
        description: "",
        content: ""
    }, err: false, isLoading: false
}
export const sectionDetail = (state = SectionDetailInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_SECTION_DETAIL:
            return { ...state, isLoading: true }
        case CourseConstant.GET_SECTION_DETAIL_SUCCESS:
            return { ...state, data: action.payload.data, err: false, isLoading: false }
        case CourseConstant.GET_SECTION_DETAIL_FAIL:
            return { ...state, data: {}, err: true }
            case CourseConstant.GET_SECTION_UPDATE:
            return { ...state, isLoading: true }
        case CourseConstant.GET_SECTION_UPDATE_SUCCESS:
            return { ...state, data: action.payload.data, err: false, isLoading: false }
        case CourseConstant.GET_SECTION_UPDATE_FAIL:
            return { ...state, data: {}, err: true }

        default:
            return state
    }
}

const courseListManagementInitialState = { err: false, data: [], isLoading: false }
export const courseListManagement = (state = courseListManagementInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_COURSE_LIST_MANAGEMENT:
            return { ...state, isLoading: true }
        case CourseConstant.GET_COURSE_LIST_MANAGEMENT_SUCCESS:
            return { ...state, isLoading: false, data: action.payload.data }
        case CourseConstant.GET_COURSE_LIST_MANAGEMENT_FAIL:
            return { ...state, data: [], err: true, isLoading: false }
        default:
            return state
    }
}

const lessonListManagementInitialState = { err: false, data: [], isLoading: false }
export const lessonListManagement = (state = lessonListManagementInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_LESSON_LIST_MANAGEMENT:
            return { ...state, isLoading: true }
        case CourseConstant.GET_LESSON_LIST_MANAGEMENT_SUCCESS:
            return { ...state, isLoading: false, data: action.payload.data }
        case CourseConstant.GET_LESSON_LIST_MANAGEMENT_FAIL:
            return { ...state, data: [], err: true, isLoading: false }
        default:
            return state
    }
}


const lessonManagementInitialState = { err: false, data: [], isLoading: false }
export const lessonManagement = (state = lessonManagementInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_LESSON_MANAGEMENT:
            return { ...state, isLoading: true }
        case CourseConstant.GET_LESSON_MANAGEMENT_SUCCESS:
            return { ...state, isLoading: false, data: action.payload.data }
        case CourseConstant.GET_LESSON_MANAGEMENT_FAIL:
            return { ...state, data: [], err: true, isLoading: false }
        default:
            return state
    }
}

const sectionListManagementInitialState = { err: false, data: [], isLoading: false }
export const sectionListManagement = (state = sectionListManagementInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_SECTION_LIST_MANAGEMENT:
            return { ...state, isLoading: true }
        case CourseConstant.GET_SECTION_LIST_MANAGEMENT_SUCCESS:
            return { ...state, isLoading: false, data: action.payload.data }
        case CourseConstant.GET_SECTION_LIST_MANAGEMENT_FAIL:
            return { ...state, data: [], err: true, isLoading: false }
        default:
            return state
    }
}
