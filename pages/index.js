import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import { useSearch } from "../context/SearchContext";

const Index = () => {
  const { searchQuery } = useSearch();
  const [courses, setCourses] = useState([]);

  // Fonction asynchrone pour charger les données des cours
  const loadCourses = async () => {
    try {
      const response = await axios.get(`/api/courses`);
      setCourses(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données des cours :", error);
    }
  };

  useEffect(() => {
    // Appel de la fonction asynchrone pour charger les données des cours
    loadCourses();
  }, []);

  // Utilisation de filteredCourses uniquement lorsque courses est valide
  const filteredCourses = courses.length > 0
    ? courses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <h1 className="jumbotron text-center bg-primary">
        Online Education Marketplace
      </h1>
      <div className="container-fluid">
        <div className="row bg-light p-2">
          {filteredCourses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
