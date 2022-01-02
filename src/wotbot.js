import { Autocomplete, Stack, TextField } from "@mui/material";
import * as React from "react";
import Logo from "./wobot-logo_blue 1.png";
import r1 from "./r1.svg";
import r2 from "./r2.svg";
import r3 from "./r3.svg";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

const Main=()=>{
    
    const data=[{ label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
      label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
      label: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
      label: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  const[buttonColor,setButtonColor]=React.useState("#F0F0F0");
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return(
        <div style={{background:"#f9f9f9",height:1060,width:1800}}>
            <div>
                <img style={{width:160,height:37,position:"absolute",left:100,top:60}} src={Logo} alt="WotBot"/>
            </div>
            <div style={{width:769,height:14,position:"absolute",top:507,left:-117.75,background:"#E0E8FC",transform:"rotate(-30deg)"}}></div>
            <div style={{width:1752,height:392,position:"absolute",top:267,left:-117.75,opacity:"45%",background:"#F0F0F0",transform:"rotate(-30deg)"}}></div>
            <div style={{width:899,height:14,position:"absolute",top:407,left:792.75,background:"#E0E8FC",transform:"rotate(-30deg)"}}></div>
            <div style={{width:560,height:611,background:"white",position:"absolute",left:499,borderRadius:15,boxShadow:"4px 4px 20px rgba(157, 157, 157, 0.12)",top:100}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Stack direction="row" style={{paddingTop:30}} spacing={-1}>
                <img  style={{marginTop:20}} src={r1}/><img  style={{}}src={r3}/><img style={{marginTop:-20}} src={r2}/>
                </Stack>
                </div>
                <div  style={{display:"flex",justifyContent:"center",marginTop:-10}}>
                <p style={{fontSize:26,fontWeight:500,width:378,textAlign:"center"}}>It’s a delight to have you onboard</p>
                </div>
                <div  style={{display:"flex",justifyContent:"center",marginTop:-25}}>
                <p style={{fontSize:14,fontWeight:400,width:378,textAlign:"center",color:"#545454"}}>Help us know you better</p>
                </div>
                <div  style={{display:"flex",justifyContent:"center",marginTop:-20}}>
                <p style={{fontSize:14,fontWeight:400,width:378,textAlign:"center",color:"#545454"}}>(This is how we optimize Wobot as per your business needs)</p>
                </div>
                <div  style={{display:"flex",justifyContent:"center",}}>
                <Stack>
                <p style={{fontSize:14,fontWeight:500,width:378,textAlign:"left",color:"#545454",marginBottom:7}}>Company name</p>
                <TextField id="outlined-basic" label="e.g. Example Inc" variant="outlined" size="small" />
                </Stack>
                </div>
                <div  style={{display:"flex",justifyContent:"center",marginTop:20}}>
                <Stack>
                <p style={{fontSize:14,fontWeight:500,width:378,textAlign:"left",color:"#545454",marginBottom:7}}>Industry</p>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={data}
                    renderInput={(params) => <TextField {...params} label="Select" size="small"/>}
                    />
                </Stack>
                </div>

                <div  style={{display:"flex",justifyContent:"center",marginTop:20}}>
                <Stack >
                <p style={{fontSize:14,fontWeight:500,width:378,textAlign:"left",color:"#545454",marginBottom:7}}>Company size</p>
                <Stack >
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    >
                    <ToggleButton  style={{marginRight:10,background:"#F0F0F0",border:"1px solid #F0F0F0",fontWeight:600,height:29}} value="web">1-20</ToggleButton>
                    <ToggleButton style={{marginRight:10,background:"#F0F0F0",border:"1px solid #F0F0F0",fontWeight:600,height:29}}value="and]roid">21-50</ToggleButton>
                    <ToggleButton style={{marginRight:10,background:"#F0F0F0",border:"1px solid #F0F0F0",fontWeight:600,height:29}}value="android">51-200</ToggleButton>
                    <ToggleButton style={{marginRight:10,background:"#F0F0F0",border:"1px solid #F0F0F0",fontWeight:600,height:29}}value="ios">201-500</ToggleButton>
                    <ToggleButton style={{marginRight:10,background:"#F0F0F0",border:"1px solid #F0F0F0",fontWeight:600,height:29}}value="500">500+</ToggleButton>
                </ToggleButtonGroup>
                <Button style={{background:"#3766E8",color:"white",fontWeight:500,width:368,marginTop:40,textTransform:"capitalize",borderRadius:5}} variant="text">Get Started</Button>

                </Stack>
                </Stack>
                </div>
                <div  style={{display:"flex",justifyContent:"center",marginTop:120}}>
                <p style={{fontSize:14,fontWeight:400,width:185,textAlign:"center"}}>Terms of use  |  Privacy policy </p>
                </div>
                
            </div>
        </div>

    );
}
export default Main;
