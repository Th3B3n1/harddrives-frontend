import { useEffect, useState } from 'react'
import { HardDrive } from './components/HardDrive'
import './App.css'

function App() {
  const [hardDrives, setHardDrives] = useState([] as HardDrive[])

  useEffect(() =>
  {
    fetch("http://127.0.0.1:5555/harddrives")
    .then(response => response.json())
    .then(data => setHardDrives(data));
  }, []);
  
  return <div>
    <table>
      <tr>
        <th>manifacturer</th>
        <th>modelNumber</th>
        <th>productFamily</th>
        <th>capacity</th>
        <th>speed</th>
        <th>used</th>
      </tr>
      {
        hardDrives.map(hardDrive => <HardDrive manifacturer={hardDrive.manifacturer} modelNumber={hardDrive.modelNumber} productFamily={hardDrive.productFamily} capacity={hardDrive.capacity} speed={hardDrive.speed} used={hardDrive.used}/>)
      }
    </table>
    <br />
    <div id="post">
      <input type="text" name="manifacturer" id="manifacturer" placeholder="Manifacturer" /><br />
      <input type="text" name="modelNumber" id="modelNumber" placeholder="Model Number" /><br />
      <input type="text" name="productFamily" id="productFamily" placeholder="Product Family" /><br />
      <input type="number" name="capacity" id="capacity" placeholder="Capacity" /><br />
      <input type="number" name="speed" id="speed" placeholder="Speed" /><br />
      <input type="checkbox" name="used" id="used" /><label htmlFor="used">Used</label><br />
      <input type="submit" onClick={() => {
        let manifacturer : HTMLInputElement = document.getElementById("manifacturer") as HTMLInputElement;
        let modelNumber : HTMLInputElement = document.getElementById("modelNumber") as HTMLInputElement;
        let productFamily : HTMLInputElement = document.getElementById("productFamily") as HTMLInputElement;
        let capacity : HTMLInputElement = document.getElementById("capacity") as HTMLInputElement;
        let speed : HTMLInputElement = document.getElementById("speed") as HTMLInputElement;
        let used : HTMLInputElement = document.getElementById("used") as HTMLInputElement;
        fetch("http://127.0.0.1:5555/harddrive", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            manifacturer: manifacturer.value, 
            modelNumber: modelNumber.value,
            productFamily: productFamily.value,
            capacity: capacity.value,
            speed: speed.value,
            used: used.checked
          })
        });
        manifacturer.value = "";
        modelNumber.value = "";
        productFamily.value = "";
        capacity.value = "";
        speed.value = "";
        used.checked = false;
        <App />
      }}/>
    </div>
  </div>
}

export default App
