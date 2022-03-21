import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import LoaderSemantic from "components/Loading/Loader";

const CharacterDetail = () => {
  const [char, setChar]: any = useState([]);
  const [loading, setLoading]: any = useState(true);
  const { char_id } = useParams();

  const fetchCharacterDetail = () => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCharacterDetail();
  }, [char_id]);

  return (
    <div>
      {loading && <LoaderSemantic />}
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            {char &&
              char.map((char: any) => (
                <Card.Group className="tttt" key={char.char_id}>
                  <Card centered fluid>
                    <Image size="medium" src={char.img} />
                    <Card.Content>
                      <Card.Header>
                        <b color="red">{char.name}</b>
                      </Card.Header>
                      <Card.Header> {char.nickname} </Card.Header>
                      <Card.Header> {char.birthday}</Card.Header>
                      <Card.Content>
                        <Card.Description> {char.occupation}</Card.Description>

                        <Card.Description>{char.status}</Card.Description>
                      </Card.Content>
                    </Card.Content>

                    <Card.Content>
                      <Card.Header> {char.category}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Card.Header> {char.school}</Card.Header>
                    </Card.Content>
                  </Card>
                </Card.Group>
              ))}
            {char && <code>{JSON.stringify(char)}</code>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CharacterDetail;
