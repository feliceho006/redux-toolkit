import { useState } from "react";
import { usedTypedSelector } from "../hooks/useTypedSelector";
import { getAPIData } from "../redux/thunks";
import { useActions } from "../hooks/useActions";
import { searchRepositories } from "../redux/repositorySlice";
import { selectRepo } from "../redux/selectors";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = usedTypedSelector(selectRepo);
  const dispatch = useActions();

  const onSubmit = () => {
    dispatch(searchRepositories());

    dispatch(getAPIData(term));
  };

  return (
    <div>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button onClick={onSubmit}>Search</button>

      {error && <h3>error</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <li>{name}</li>)}
    </div>
  );
};

export default RepositoriesList;
