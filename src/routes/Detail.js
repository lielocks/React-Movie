import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Introduction from "../components/Introduction"

function Detail() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getDetails();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
}
return (
    <div>
        <h1>Showing Details of each Movie !</h1>
        <div>
            <Introduction
                id={details.id} 
                title={details.title}
                descriptionIntro={details.description_intro}
            />
        </div>
    </div>
);
}

  export default Detail;