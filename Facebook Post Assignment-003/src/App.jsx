import "./App.css";
import image from "./assets/img1.jpeg";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { MdInsertComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

function Post () {
  return (
    <div className="post-container">
        <div className="post-header">
          <div className="post-user-data">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Emblem_of_Hamas.svg/640px-Emblem_of_Hamas.svg.png"
              alt=""
              className="dp"
              id=""
            />
            <div>
              <h3>Hamas</h3>
              <span>30 min ago</span>
            </div>
          </div>
          <SlOptions />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          dolorem adipisci labore. Repellat iste atque cum sapiente quisquam
          accusamus, soluta facere commodi, provident, numquam veniam ab officia
          architecto praesentium expedita
        </p>
        <img src={image} alt="Post Image" className="post-photo" />
        <div className="post-actions">  
          <FcLike className="icons" />
          <MdInsertComment className="icons" />
          <IoIosShareAlt className="icons" />
        </div>
      </div>
  )
}

function App() {
  return (
    <div style={{gap:"10px", display:"flex", flexDirection:"column"}}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
