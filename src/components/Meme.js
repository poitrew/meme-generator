import react from "react";
import React from "react";
import memesData from "../memesData"

export default function Meme() {
    
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        url: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumb = Math.floor(Math.random() * memesArray.length)
        setMemeImage(prevMemeImage => (
            {
                ...prevMemeImage,
                url: memesArray[randomNumb].url
            }
        )) 
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage.url} alt="random meme" className="meme-img"></img>
        </main>
    )
}