import styles from './Filters.module.css'
import { useState,useEffect } from 'react';

const Filters =(props)=>{
    const movies = [
        {
          id: 1,
          name: "Intouchables",
          genre: "Comedy",
          description: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
          duration: 189,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/229159_1689960182.jpg"
        },
        {
          id: 2,
          name: "Oppenheimer",
          genre: "Drama",
          description: "The film’s jaw-dropping centrepiece – the first atomic bomb test – gives you a sense of what the first audiences to see 2001: A Space Odyssey must have felt 50-odd years ago.",
          duration: 173,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/4890629_1689533869.jpg"
        },
        {
          id: 3,
          name: "The Matrix",
          genre: "Action",
          description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
          duration: 136,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/537980_1689634143.jpg"
        },
        {
          id: 4,
          name: "Inception",
          genre: "Action",
          description: "A thief who enters the dreams of others to steal their secrets gets a final task: to plant an idea in someone's mind.",
          duration: 148,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/1314857_1689540439.jpg"
        },
        {
          id: 5,
          name: "Forrest Gump",
          genre: "Drama",
          description: "A slow-witted but kind-hearted man witnesses and unwittingly influences several defining historical events in the 20th century USA.",
          duration: 142,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/4626683_1689533769.jpg"
        },
        {
          id: 6,
          name: "Pulp Fiction",
          genre: "Drama",
          description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          duration: 154,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/4968949_1689962762.jpg"
        },
        {
          id: 7,
          name: "The Shawshank Redemption",
          genre: "Drama",
          description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          duration: 142,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/1219257_1689541220.jpg"
        },
        {
          id: 8,
          name: "Interstellar",
          genre: "Adventure",
          description: "A team of explorers undertakes a voyage through a wormhole in space to ensure humanity's survival.",
          duration: 169,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/4890200_1689532928.jpg"
        },
        {
          id: 9,
          name: "The Godfather",
          genre: "Drama",
          description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          duration: 175,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/818284_1689562442.jpg"
        },
        {
          id: 10,
          name: "Gladiator",
          genre: "Action",
          description: "A former Roman General seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
          duration: 155,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/4383653_1689535994.jpg"
        },
        {
          id: 11,
          name: "Jurassic Park",
          genre: "Adventure",
          description: "A group of scientists is invited to a remote island populated by dinosaurs cloned from prehistoric DNA.",
          duration: 127,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-08/471024_1690876864.jpg"
        },
        {
          id: 12,
          name: "The Dark Knight",
          genre: "Action",
          description: "Batman confronts the Joker, a criminal mastermind wreaking havoc on Gotham City.",
          duration: 152,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/4531254_1689533424.jpg"
        },
        {
          id: 13,
          name: "The Lord of the Rings: The Fellowship of the Ring",
          genre: "Action",
          description: "A young hobbit must carry a powerful ring to Mount Doom to destroy it and save Middle-earth.",
          duration: 178,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/444969_1689831121.jpg"
        },
        {
          id: 14,
          name: "Avatar",
          genre: "Adventure",
          description: "A paraplegic marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting the alien civilization.",
          duration: 162,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/762646_1689533015.jpg"
        },
        {
          id: 15,
          name: "The Social Network",
          genre: "Drama",
          description: "A story about the founding of Facebook and the legal battles that followed.",
          duration: 120,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/994675_1690592642.jpg"
        },
        {
          id: 16,
          name: "The Great Gatsby",
          genre: "Drama",
          description: "A Midwestern war veteran finds himself drawn to the past and lifestyle of his millionaire neighbor.",
          duration: 143,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/906654_1690585323.jpg"
        },
        {
          id: 17,
          name: "La La Land",
          genre: "Comedy",
          description: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
          duration: 128,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/1000414_1690491903.jpg"
        },
        {
          id: 18,
          name: "The Avengers",
          genre: "Adventure",
          description: "A team of superheroes must come together to stop Loki and an alien army from enslaving humanity.",
          duration: 143,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/1102827_1690491783.jpg"
        },
        {
          id: 19,
          name: "The Silence of the Lambs",
          genre: "Drama",
          description: "A young FBI cadet seeks the help of an incarcerated and manipulative cannibal killer to catch another serial killer.",
          duration: 118,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/1103903_1690480925.jpg"
        },
        {
          id: 20,
          name: "Titanic",
          genre: "Drama",
          description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
          duration: 195,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/840574_1689562502.jpg"
        },
        {
          id: 21,
          name: "The Lion King",
          genre: "Adventure",
          description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
          duration: 88,
          imgURL: "https://gidonlinehd.online/uploads/posts/2023-07/668250_1689673023.jpg"
        }
      ];
      


    const [Genre, SetGenre]= useState([]);
    const [Duration, SetDuration]= useState([]);
    const [ServResponse, SetServResponse]=useState({});
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    
    useEffect(()=>{
        async function request (url) {
            const data = await fetch(`http://localhost:5000/api/movies${url}`);
            let response =await data.json();
            console.log(response)
            SetServResponse(response)
            props.pullData(response);
            
        }
        if (isInitialLoad) {
            setIsInitialLoad(false);
            request('?genre=all').catch(e=>{
                props.pullData(movies)
            });
            return; // Don't make the request on initial load
        }
        else{
            let query='';
            Genre.forEach((item)=>{
                query +=`genre=${item}&`;
            })
            Duration.forEach((item)=>{
                query +=`duration=${item}&`;
            })
            console.log(query);
            request("?"+query).catch(e=>{
                props.pullData(movies)
            });;
        }
 
    },[Genre,Duration])



    
    const BoxCheckedGenre=(event)=>{
        if(event.target.checked === true){
            if(Genre.indexOf(event.target.value) === -1){
                SetGenre((prevVal)=> {
                    return [...prevVal, event.target.value]
                })
            }            
        }
        else{
            if(Genre.indexOf(event.target.value) !== -1){
                SetGenre(Genre.filter((item)=> item!==event.target.value? item:''))
            }   
        }
        console.log(Genre);
    }

    const BoxCheckedDuration=(event)=>{
        if(event.target.checked=== true){
            if(Duration.indexOf(event.target.value) === -1){
                SetDuration((prevVal)=> {
                    return [...prevVal, event.target.value]
                })
            }            
        }
        else{
            if(Duration.indexOf(event.target.value) !== -1){
                SetDuration(Duration.filter((item)=> item!==event.target.value? item:''))
            }   
        }
        console.log(Duration);
    }
   
    return(
        <div className={styles.CheckboxWrapper}>
            <div className={styles.CheckboxSection}>
                <span> Movie genre</span>
            <label className={styles.cyberpunk_checkbox_label}>
                <input type="checkbox" className={styles.cyberpunk_checkbox} value='Drama' onClick={BoxCheckedGenre}/>Drama</label>
            <label className={styles.cyberpunk_checkbox_label}>
                <input type="checkbox" className={styles.cyberpunk_checkbox} value='Comedy' onClick={BoxCheckedGenre}/>Comedy</label>
            <label className={styles.cyberpunk_checkbox_label}>
                <input type="checkbox" className={styles.cyberpunk_checkbox} value='Action' onClick={BoxCheckedGenre}/>Action</label>
            <label className={styles.cyberpunk_checkbox_label}>
                <input type="checkbox" className={styles.cyberpunk_checkbox} value='Adventure' onClick={BoxCheckedGenre}/>Adventure</label>
            
            </div>
            <div className={styles.CheckboxSection}>
            <span> Duration</span>
            <label className={styles.cyberpunk_checkbox_label}>
                <input type="checkbox" className={styles.cyberpunk_checkbox} value='120' onClick={BoxCheckedDuration}/>Longer 120 minutes</label>
            <label className={styles.cyberpunk_checkbox_label}>
                <input type="checkbox" className={styles.cyberpunk_checkbox} value='119' onClick={BoxCheckedDuration}/>Shorter 120 minutes</label>
            </div>
            
        </div>
    )
}

export default Filters;
