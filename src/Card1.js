import { useEffect, useState } from 'react'
import axios from 'axios'

const Card1 = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        console.log(useEffect);
        getCharacter();
    }, [])

    const getCharacter = () => {
        axios.get("https://www.breakingbadapi.com/api/characters/1").then((res) => setdata(res.data)).catch((err) => console.log(err));
    }

    console.log("characters", data);

    return (
        <>
            {
                data.map((item) => {
                    return (
                        <>
                        <div className='card'>
                            <img  src={item.img} alt='Image' height="100%" width="100%"></img>
                            <h3 className='card3'>{item.name}</h3>
                            <h4 className='card1' >{item.occupation}</h4>
                        </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Card1
