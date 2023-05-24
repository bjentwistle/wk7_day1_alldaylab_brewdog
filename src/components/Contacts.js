import ButtonMailto from "./ButtonMailTo";

const Contacts = () => (
    
<div>
    <h1>BrewDog API</h1>
    <hr></hr>
    <h4>Contact Us</h4>
    <p>Our brewery address is:</p>
    <p>BrewDog PLC, Balmacassie Industrial Estate, Ellon, Aberdeenshire. AB41 8BX.</p>
    <p>Customer Service operating hours: Monday to Friday, 9am to 6pm</p>
        Email: <ButtonMailto label="pr@brewdog.com" mailto="mailto:pr@brewdog.com" />
    <p>This is for the media/journalists only and any other requests will not be responded to at this email address.</p>
</div>
  );
  
  export default Contacts;