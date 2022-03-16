import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "components/Loading/Loading";
const CharacterDetail = () => {
  const [char, setChar]: any = useState({});
  const [loading, setLoading]: any = useState(true);

  const { char_id } = useParams();

  useEffect(() => {
    axios
      (`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => {
        setChar(res.data);
      }).finally(() => {
        setLoading(false);
      });
      
  }, [char_id]);

  return (
    
    <div>
        {char_id}
        {char.name}
        
    </div>
  )
};

export default CharacterDetail;
