import react from "react";
import React from "react";
import memesData from "../memesData"

export default function Meme() {
    
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
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

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" onChange={handleChange} value={memeImage.topText} name="topText"/>
                <input type="text" className="form--input" placeholder="Bottom text" onChange={handleChange} value={memeImage.bottomText} name="bottomText" />
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeImage.url} alt="random meme" className="meme--img"></img>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}