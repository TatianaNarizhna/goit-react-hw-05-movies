import { useParams } from "react-router-dom";
import PageHeading from "../../components/PageHeading/PageHeading";

export default function MovieDatailsPage() {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <>
      <PageHeading text={`${movieId}`} />
    </>
  );
}
