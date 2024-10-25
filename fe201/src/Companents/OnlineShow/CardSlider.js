import "./CardSlider.css"
const cartData=[
  {id:1,img:"./images/img1.jpeg", text:"Bouquet 014", price:"100azn",button:"Add to basket"},
  {id:2,img:"./images/img2.jpeg",text:"Bouquet 010",price:"450azn",button:"Add to basket"},
  {id:3,img:"./images/img3.jpeg",text:"Bouquet 009",price:"280azn",button:"Add to basket"},
  {id:4,img:"./images/img4.jpeg",text:"Bouquet 005",price:"65azn",button:"Add to basket"}
];
export const CardSlider=()=>{
    return(
     <div className="cards-container">
      {cartData.map(card=>(
        <div key={card.id}
        className="card">    
      <img className="cols-4" src={card.img}/>
      <div className="bg-color">
      <p>{card.text}</p>
      <p>{card.price}</p>
      <button>
      <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path> </g></svg>
     <span> {card.button}</span>
      </button>
      </div>
        </div>
      ))}
     </div>
    )
}