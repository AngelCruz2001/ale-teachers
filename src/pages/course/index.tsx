import { NextPage } from "next";
import { Header, Date, TableAssistances } from 'components/course';
import { useAppSelector } from "hooks/reduxHooks";

const Home: NextPage = () => {
    const { activeCourse } = useAppSelector(state => state.courses);

    return <>
        {/* header */}
        <Header courseName={activeCourse?.course_name} groupName={activeCourse?.group_name} />
        {/* Subtitle */}
        <Date startDate={activeCourse?.start_date} endDate={activeCourse?.end_date} />
        {/* content */}
        <TableAssistances activeCourse={activeCourse} />
    </>
};

export default Home;