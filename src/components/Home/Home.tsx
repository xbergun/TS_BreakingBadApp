import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { fetchCharacters } from "store/CharacterSlice/CharacterSlice";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import Loading from "components/Loading/Loading";
import { Link } from "react-router-dom";

//? type
import CharacterProps from "types/CharacterProps";
import CustomButton from "components/Button/CustomButton";
import CustomButtonProps from "types/CustomButtonTypes";
import LastPage from "components/LastPage/LastPage";

import "./index.css";


const Home = () => {
  const characters = useSelector((state: RootState) => state.characters.items);
  const status = useSelector((state: RootState) => state.characters.status);
  const nextPage = useSelector((state: RootState) => state.characters.page);
  const hasNextPage = useSelector(
    (state: RootState) => state.characters.hasNextPage
  );
  const {isDarkMode} = useSelector((state: RootState) => state.darkMode)
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters(nextPage));
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  const handleClick = (e: CustomButtonProps) => {
    e.preventDefault!();
    dispatch(fetchCharacters(nextPage));
  };

  return (
    <div className={isDarkMode ? "bg-dark" : "bg-light"}>
      <Grid columns={3} container textAlign="center">
        <Grid.Row>
          {characters.map((character: CharacterProps) => (
            <Grid.Column key={character.char_id}>
              <Link to={`/char/${character.char_id}`}>
                <Card  className="card">
                  <Image src={character.img} className="img" />
                  <Card.Content>
                    <Card.Header>{character.name}</Card.Header>
                    <Card.Meta>
                      <span className="date">{character.birthday}</span>
                    </Card.Meta>
                    <Card.Description>{character.nickname}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      {character.portrayed}
                    </a>
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
        <div>
          {status === "pending" ? <Loading /> : null}
          {hasNextPage && status !== "pending" && (
            <CustomButton
              onClick={handleClick}
              title={`Daha fazla göster ${nextPage}`}
            />
          )}
          {!hasNextPage && <LastPage/>}
        </div>
      </Grid>
    </div>
  );
};

export default Home;
