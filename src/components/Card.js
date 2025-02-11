import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;  //liked courses are tracked here
    let setLikedCourses = props.setLikedCourses;
    function clickHandler() {
        //logic to handle like button click
        if(likedCourses.includes(course.id)) {
            //it means,phle se liked h
            setLikedCourses((prev) => prev.filter( (cid) => (cid !==course.id) ));
            toast.warning("Like Removed");
        }

        else {
            //it means,phle se liked nhi h
            //need to insert this course id in likedCourses
            if(likedCourses.length ===0) {
                setLikedCourses([course.id]);
            }

            else {
                likedCourses((prev) => [...prev,course.id]);
            }

            toast.success("Liked Successfully");
        }

    }
    return(
        <div className = "w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt=""/>
                <div className = "w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick = {clickHandler}>
                        {
                            !likedCourses.includes(course.id) ? 
                            (<FcLikePlaceholder fontSize ="1.75rem" />)
                            : (<FcLike fontSize="1.75rem" /> )
                        }
                    </button>
                </div>
            </div>
            
            <div className = "p-4">
                <p className= "font-semibold text-white text-lg leading-6">{course.title}</p>
                <p className= "mt-2 text-white">
                    {
                        course.description.length > 100  ? 
                        (course.description.substr(0,100))  + "..."
                        : 
                        (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;