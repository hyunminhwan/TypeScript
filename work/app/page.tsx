'use client'

export default function Home() {
let name:string = "hyun";
let age:number = 33;
let link:string = "https://www.naver.com/";

  return (
    <div>
      <h4 onClick={()=>{}} className="title">애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <p className="title-sub">age {age}</p>
      <a  className="title-sub" href={link} style={{color:"red"}}>링크</a>
    </div>
    
  )
}
