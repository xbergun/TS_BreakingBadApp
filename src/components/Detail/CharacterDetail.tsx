import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "components/Loading/Loading";
const CharacterDetail = () => {
  const [char, setChar]: any = useState([]);
  const [loading, setLoading]: any = useState(true);

  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div>
      {loading && <Loading />}
      {char &&
        char.map((char: any) => (
          <div>
            <h1>{char.name}</h1>
            <img src={char.img} />
            <p>{char.nickname}</p>
          </div>
        ))}
    </div>
  );
};

export default CharacterDetail;
