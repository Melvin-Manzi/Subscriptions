import Person from "./images/person.jpg"
import './App.css';
import Navbar from './navbar';
function Number(){
  return(
    <>
    <button className="second-btn">6</button>
    <button className="second-btn second-btn-one">6</button>
    <button className="second-btn second-btn-two">3</button>
    </>
  )
}
function Numbers(){
  return(
    <>
    <button className="third-btn">12</button>
    <button className="third-btn third-btn-one">19</button>
    <button className="third-btn third-btn-two">16</button>
    </>
  )
}
function Numberz(){
  return(
    <>
    <button className="fourth-btn">48</button>
    <button className="fourth-btn fourth-btn-one">33</button>
    <button className="fourth-btn fourth-btn-two">28</button>
    </>
  )
}
function Silver(){
  const methods = [
    {title:'Payments', id:1},
    {title:'Subscriptions', id:2},
    {title:'Ads', id:3}
  ];
  const methodItems = methods.map(methods=>
  <li key={methods.id} className="metho">{methods.title}</li>)
  return(
<>
<h1 className="silver">Silver</h1>
<p className="silver-price">$ <span className="silver-price-cost">997</span></p>
<p className="silver-text">This is the best plan for people who <br />are  starting out.</p>
<ul className="method">{methodItems}</ul>

</>
  );
};
function Gold(){
  const modes = [
    {title:'Payments', id:1},
    {title:'Subscriptions', id:2},
    {title:'Ads', id:3}
  ];
  const modeItems = modes.map(modes=>
  <li key={modes.id} className="mode">{modes.title}</li>)
  return(
    <>
    <h1 className="gold">Gold</h1>
    <p className="gold-price">$<span className="gold-price-cost">1997</span></p>
    <p className="gold-text">This is an awesome plan for people<br />who are starting out. </p>
    <ul className="modes">{modeItems}</ul>
    </>
  )
}
function Platinum(){
  const plates = [
    {title:'Payments', id:1},
    {title:'Subscriptions', id:2},
    {title:'Ads', id:3}
  ];
  const plateItems = plates.map(plates=>
  <li key={plates.id} className="plate">{plates.title}</li>)
  return(
    <>
    <h1 className="platinum">Platinum</h1>
    <p className="platinum-price">$&nbsp;<span className="platinum-price-cost">2497</span></p>
    <p className="platinum-text">This is the best plan for people<br />who are starting out. </p>
    <ul className="plates">{plateItems}</ul>
    </>
  )
}
function Coupon(){
  return(
    <>
     <button className="coupon">CURRENT</button>
    </>
  );
}
 export default function MyApp(){
return(
  <>
  <img src={Person} className="person" />
    <h1 className="name">Mark Atkinson</h1>
  <p className="page">This is your subscription page</p>
  <Navbar />
  <div className="box">  <Silver /></div>
  <Coupon/>
  <button className="first-btn">Current</button>
  <div className="box box-one"><Gold /></div>
  <Number /> 
  <button className="first-btn first-btn-one">Upgrade</button>
  <Numbers /> 
  <div className="box box-two"><Platinum /></div>
  <Numberz />
  <button className="first-btn first-btn-two">Upgrade</button>
  </>
);
}