import '../../styles/layout/Loading.scss';

const Loading = ({inLoading}) => {

    //return <p>EH!!! EL LOADING!</p>

    if(inLoading){
        return (
            <span className="loading" />
        )
    } else {
        return null;
    }
  
}

export default Loading;