const [data, setData] = useState([]);

const fetchPatterns = async() => {
    try{
        const res = await fetch('/');
        const json = await res.json();
        setData(json);
    }catch(err){
        console.error(error);
    }

}