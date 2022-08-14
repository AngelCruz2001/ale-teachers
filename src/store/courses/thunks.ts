import aleApi from "api/aleApi"
import { Course } from "interfaces/Courses"
import { Dispatch } from "redux"
import { setActiveCourse, setLoadingCOURSE } from "./courseSlice"

interface CourseResponse {
    ok: boolean;
    course: Course;
}

interface AssistanceResponse {
    ok: boolean;
    msg: string;
}

export const startGettingCourseInfo = (id_course: number, id_group: number) => async (dispatch: Dispatch) => {

    dispatch(setLoadingCOURSE(true))

    const { data } = await aleApi.get<CourseResponse>(`/groups/${id_group}/courses/${id_course}/mix`)
    console.log(data.course)

    dispatch(setLoadingCOURSE(false))
    dispatch(setActiveCourse(data.course))

}

export const startSetAssistance = (id_assistance: number, assistance: number) => async (dispatch: Dispatch) => {
    try {
        const { data } = await aleApi.put<AssistanceResponse>(`/assits/${id_assistance}`, { attended: assistance })
        console.log(data.msg)
    } catch (error) {
        console.log(error)
    }
}

export const startSetGrade = (id_grade: number, grade: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await aleApi.put<AssistanceResponse>(`/grades/regular/${id_grade}`, { grade })
        console.log(data.msg)
    } catch (error) {
        console.log(error)
    }
}