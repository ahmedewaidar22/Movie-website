import {useParams} from "react-router-dom";
import {useState, useEffect}  from  "react"
import axios from "axios";
import { Container,Row,Col } from "react-bootstrap";


function Show(props) {
    const params  = useParams()
	console.log(params.id, "params")// params link 
	



	const [userInfo, setInfo] = useState({})


	useEffect(() => {
		axios
		.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9e6e68da10912cb208a480beaf066249`)
		.then((res)=> {
			console.log(res.data, "here")
			setInfo(res.data)

		})
		.catch((err) => {
			console.log(err)
		})
	}, [])



    return (

       

  <Container>
      <Row>
        <Col>
        <img variant="top" className="im" src={`https://image.tmdb.org/t/p/w500${userInfo.poster_path}`} />

        </Col>
        <Col>
        <p><strong>Title: </strong>{userInfo.original_title}  </p>
        <p><strong>original language: </strong> {userInfo.original_language}  </p>
        <p><strong>overview: </strong> {userInfo.overview}  </p>
        <p><strong>release date: </strong> {userInfo.release_date}  </p>
        <p><strong>Tagline: </strong> {userInfo.tagline}  </p>
        <p><strong>Rate: </strong> {userInfo.vote_average}  </p>

        </Col>
      </Row>
  </Container> 


    );
  }
  
  export default Show;