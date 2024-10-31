"use client";
import Image from "next/image";
import {useState} from "react";

export default function Home() {
// Implementation
// - Pick an API
// - Build a button component that has a fetch action/ clear action
// - Build a component that displays our data (should havea an empty and fulfilled state)
// - Build a function that will fetch some data
// - Format and handle the data 
// - (error handling)
// - Style our app and create breakpoints
// - Component for our button to sit in
// - clean up code

const [pictureContent, setPictureContents] = useState(null);
const [loading, setLoading] = useState(false);

async function fetchPictures(){
  setLoading(true);
  const API_URL = 
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
  const response = await fetch(API_URL);
  const testVar = "hello;"
  const data = await response.json();
  setPictureContents(data);
  //console.log(data);
  setLoading(false);
}

const Header = () => {
  return (
  <header>
  <h1>My cool Midterm Submission</h1>
  <button 
    disabled={loading}
    className='border-2 border-black p-2'
    onClick={fetchPictures}
  >
    Fetch </button>
  </header>
  );
}

const PictureDisplay = () => {
  if (loading) {
    return <section>Loading...</section>
  }

  if (pictureContent) {
    const pictureList = [];
    pictureContent.forEach((picture, i) => {
      // keys are explanation, title, url
      pictureList.push(
        <article key={i}>
          <img src={picture.url} alt={picture.title} />
          <h2>{picture.title}</h2>
          <p>{picture.explanation}</p>
          <hr />
        </article>
      );
    });    
    return <section>{pictureList}</section>
  }

  return <section>No picture have been fetched</section>;
};

  return (
    <div className='m-8'>
      <Header />
      <PictureDisplay />
    </div>
  );
}
