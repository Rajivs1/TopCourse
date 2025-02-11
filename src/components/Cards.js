import React from "react";
import Card from "./Card";
import {useState} from "react";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    //No courses Liked Initially
    const[likedCourses,setLikedCourses] = useState([]);

    function getCourses() {
        if(category === "All") {
            if (!courses || typeof courses !== "object") {
                return []; // Return empty array if courses is undefined or not an object
            }
    
            let allCourses = [];
            Object.values(courses).forEach(array => {
                if (Array.isArray(array)) {
                    array.forEach(courseData => {
                        allCourses.push(courseData);
                    });
                }
            });
            return allCourses;
        }

        else {
            //in this case only specific category array  passed
            return courses[category];
        }
    }

    return (
        <div className = "flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => (
                <Card key={course.id} course={course} likedCourses={likedCourses} 
                setLikedCourses={setLikedCourses} />
            ))}
        </div>
    );
}

export default Cards;
