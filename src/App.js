import React, { useState , useEffect } from 'react';
import {MenuItem, FormControl, Select, Card, CardContent,} from "@material-ui/core"
import InfoBox from './infobox';
import Map from './Map';
import './App.css';
import Table from './Table';
import { sortData, prettyPrintStat } from './util';
import LineGraph from "./LineGraph";
import 'leaflet/dist/leaflet.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const[countryInfo, setCountryInfo] = useState({});
  const[tableData,setTableData] =useState([]);
  const[mapCenter, setMapCenter]= useState({lat: 34.80746, lng:-40.4796});
  const [mapZoom, setMapZoom]=useState(3);
  const[mapCountries, setMapCountries] = useState([]);
  const[casesType, setCasesType]= useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })

  }, [])


useEffect(() =>{

  const getCountriesData = async () => {
    await fetch ("https://disease.sh/v3/covid-19/countries")
    .then((response)=> response.json())
    .then((data)=>{
      const countries = data.map((country)=>(
        {
          name:country.country,
          value: country.countryInfo.iso2
      }));

      const sortedData = sortData(data);
      setTableData(sortedData);
      setMapCountries(data); 
      setCountries(countries);
      });
  };
  getCountriesData();

  },[]);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    console.log('yooo>>', countryCode);
    setCountry(countryCode);

    const url =
      countryCode === 'worldwide' ? 
      'https://disease.sh/v3/covid-19/all' :
      `https://disease.sh/v3/covid-19/countries/${countryCode}`;
     fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        //all of the data from the country response
        setCountryInfo(data);

        if (data.countryInfo) {
          setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
          setMapZoom(4);
        }
    });

  };
  console.log("Country Info >>>", countryInfo)

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant='outlined' onChange={onCountryChange} value= {country}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
                {
                countries.map((country) =>(
                  <MenuItem key={country.value} value={country.value}>{country.name}</MenuItem>
                ))}
                
              </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
          isRed
          active={casesType==='cases'}
          onClick = {(e) => setCasesType('cases')}
          title =" Coronavirus Cases" 
          cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)} />

          <InfoBox 
          active={casesType==='recovered'}
          onClick = {(e) => setCasesType('recovered')}
          title =" Recovered" 
          cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>

          <InfoBox 
          isRed
          active={casesType==='deaths'}
          onClick = {(e) => setCasesType('deaths')}
          title =" Deaths Cases"
          cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
          
        </div>
        <Map
          casesType = {casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom = {mapZoom}

        />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries = {tableData}/>
          <h3 className='app__graphTitle'>Worldwide new {casesType}</h3>
          <LineGraph className='app__graph' casesType={casesType} />
        </CardContent>

      </Card>
    </div>
  );
}

export default App;
