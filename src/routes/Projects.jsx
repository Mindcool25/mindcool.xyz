import NavBar from "../components/Navbox.jsx";

function Projects() {
    return ( <div>
            <NavBar/>
            <h1>Projects</h1>
            <li>
            <ul>
              <h2>Pyntago</h2>
              <h3><a href="https://github.com/Mindcool25/Pyntago">Github</a></h3>
              <p>Pyntago is a project I wrote in python for my High School capstone project. It is a program that emulates the Pentago board game, and was written so that a machine learning library could be used to run the game, which my friend implemented. I also wrote a simple client/server interface for it to allow for network multiplayer through python's network sockets.</p>
              <center><img src="demo.gif" height="500px"/></center>
            </ul>
            <hr/>
            <ul>
              <h2>Gopher Server in Rust</h2>
              <h3><a href="https://github.com/Mindcool25/gopher_rust">Github</a></h3>
              <p>Status: Down</p>
              <p>gopher_rust is a really simple gopher server implemented in rust, which minimal function, which allows it to server text and gophermaps, but anything past that I have not implemented yet, but plan to eventually. It is usually hosted off of my Raspberry Pi</p>
            </ul>
            <hr/>
            <ul>
              <h2>Recipe Full Stack App</h2>
              <h3><a href="https://github.com/Mindcool25/recipeAPI-frontend">Front End Github</a></h3>
              <h3><a href="https://github.com/Mindcool25/recipeAPI-backend">Back End Github</a></h3>
              <p>This is a project I am still currently working on, which stores and serves recipes from a mongoDB database. It doesn't look too pretty, but it does work pretty well. I still need to add in editing of recipes, as well as style the app to not look like plain HTML. I don't currently host it anywhere, but plan to host it under my domain eventually. (The cookie recipe below is pretty good, but it makes a lot, so plan on making half a batch for about 3 dozen cookies)</p>
              <center><img src="Images/RecipeDemo.png" height="500px"/></center>
            </ul>
            </li>
            
        </div>
    );
}
export default Projects;
