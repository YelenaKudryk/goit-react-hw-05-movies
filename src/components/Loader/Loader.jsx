import { Blocks } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderSpinner>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </LoaderSpinner>
  );
};

export default Loader;
