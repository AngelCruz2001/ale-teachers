import aleApi from "api/aleApi";
import { GivenCourses } from "interfaces";
import { Dispatch } from "redux";
import { setCourses } from "./teacherSlice";

interface teacherResponse {
    ok: boolean;
    courses: GivenCourses[];
}

export const startGetCoursesGivenByATeacher = (idTeacher: string | null) => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await aleApi.get<teacherResponse>(`/teachers/${idTeacher}/courses`);
            dispatch(setCourses(data.courses));

        } catch (error: any) {

            console.log("Response API", error)
            console.log(error.response.detail);
        }

    };
};

export const startGetGroupData = (idGroup: string, idCourse: string) => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await aleApi.get<teacherResponse>(`/groups/${idGroup}/courses/${idCourse}`);
            dispatch(setCourses(data.courses));
        } catch (error: any) {
            console.log("Response API", error)
            console.log(error.response.detail);
        }

    };
}