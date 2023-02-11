import { GivenCourses } from "interfaces";
import Router from "next/router";
import React, { useEffect, useMemo } from "react";
import { startGettingCourseInfo } from "store/courses/thunks";
import { startGetCoursesGivenByATeacher } from "store/teachers/thunk";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { useSession } from "next-auth/react";
export const useSetTeachersData = () => {
  const dispatch = useAppDispatch();
  const { data } = useSession();
  const {
    teacher: { courses },
    ui: { isActiveCourses },
    auth: { user },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (data) {
      dispatch(startGetCoursesGivenByATeacher(data.user.user.id_teacher));
    }
  }, [data]);

  const handleClick = (course: GivenCourses) => {
    Router.push("/course");
    dispatch(startGettingCourseInfo(course.id_course, course.id_group));
  };
  const dataRows = useMemo(() => {
    if (isActiveCourses) {
      return courses.filter((course) => course.status === "Activo");
    }
    return courses;
  }, [courses, isActiveCourses]);

  return { dataRows, handleClick };
};
