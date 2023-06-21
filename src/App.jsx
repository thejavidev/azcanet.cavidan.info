import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "./components/store/posts";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list)
  useEffect(() => {
 
    dispatch(loadposts())
    console.log(data)

  }, [dispatch])

  return (
    <>
      asdasd
    </>
  )
}

export default App
