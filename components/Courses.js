import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CourseCard from './CourseCard';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // fetch data from github.com/behrends/nextjs-nav-mui/db.json
    // (fake REST server, see https://my-json-server.typicode.com)
    const loadData = async () => {
      const response = await fetch(
        'https://my-json-server.typicode.com/behrends/nextjs-nav-mui/courses'
      );
      const data = await response.json();
      setCourses(data);
    };
    loadData().catch(console.error);
  }, []);

  if (courses.length === 0)
    return <Typography variant="h5">Keine Kurse</Typography>;

  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.id} name={course.name} />
      ))}
    </>
  );
}
