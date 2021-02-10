import EditPage from './EditPage';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  getAboutMe,
  getContacts,
  getLookingForAJobDescription,
  getLookingForAJobInfo
} from '../../state/selectors/profileSelector';
import {getId, getLogin} from '../../state/selectors/authPageSelector';
import {getProfile} from '../../state/profileReducer';

const EditPageContainer = (props) => {
  useEffect(()=> props.getProfile(props.id),[props.aboutMe])
  
  return <EditPage {...props}/>;
  
};

const mapStateToProps = state => {
  return {
    name: getLogin(state),
    aboutMe: getAboutMe(state),
    id: getId(state),
    isLookingForJob: getLookingForAJobInfo(state),
    job: getLookingForAJobDescription(state),
    vk: getContacts(state).vk,
    facebook: getContacts(state).facebook,
    github: getContacts(state).github,
    instagram: getContacts(state).instagram,
    twitter: getContacts(state).twitter,
    youtube: getContacts(state).youtube,
    mainLink: getContacts(state).mainLink,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    getProfile(id){
      dispatch(getProfile(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPageContainer);