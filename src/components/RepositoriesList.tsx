import { useEffect, useState } from "react";
import { usedTypedSelector } from "../hooks/useTypedSelector";
import { getAPIData } from "../redux/thunks";
import { useActions } from "../hooks/useActions";
import { searchRepositories } from "../redux/repositorySlice";
import { selectRepo } from "../redux/selectors";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = usedTypedSelector(selectRepo);
  const dispatch = useActions();
  console.log(data);

  useEffect(() => {
    dispatch(searchRepositories());
  }, []);

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   getAPIData(term);
  // };

  return (
    <div>
      {/* <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>error</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <li>{name}</li>)} */}
    </div>
  );
};

export default RepositoriesList;
