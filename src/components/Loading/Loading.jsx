import '../../styles/layout/Loading.scss';

const Loading = ({inLoading}) => {

    

    if(inLoading){
        return (
            <span className="loading" />
        )
    } else {
        return null;
    }
  
}

export default Loading;